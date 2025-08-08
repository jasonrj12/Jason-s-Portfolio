import React, { useState } from "react";
import { FiMail, FiPhone, FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";

const Contact = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Fixed Google Form URL - changed to formResponse
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSf0rVEFzjSwCxv1iyeRU8dI2CzjIe7mPOxKexSIwwYBFhuRaA/formResponse";
  
  // Your entry IDs look correct
  const GOOGLE_FORM_FIELDS = {
    name: "entry.861816956",
    email: "entry.451621328",
    message: "entry.877508170"
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      // Create FormData object
      const formDataToSend = new FormData();
      formDataToSend.append(GOOGLE_FORM_FIELDS.name, formData.name);
      formDataToSend.append(GOOGLE_FORM_FIELDS.email, formData.email);
      formDataToSend.append(GOOGLE_FORM_FIELDS.message, formData.message);

      // Submit to Google Forms
      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors'
      });

      // Success - clear form and show message
      setSubmitStatus('success');
      setFormData({ name: "", email: "", message: "" });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section 
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full py-20 bg-white dark:bg-zinc-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-zinc-800 dark:text-white mb-4"
        >
          Let's <span className="text-blue-600 dark:text-blue-400">Connect</span>
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto"
        >
          Have a project in mind or want to chat? I'm always open to discussing new opportunities.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-zinc-800 rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-semibold text-zinc-800 dark:text-white mb-6">
              Send me a message
            </h3>
            
            {/* Success Message */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg flex items-center gap-3"
              >
                <FiCheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                <p className="text-green-700 dark:text-green-300">
                  Message sent successfully! I'll get back to you soon.
                </p>
              </motion.div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg"
              >
                <p className="text-red-700 dark:text-red-300">
                  Please fill in all fields or try again later.
                </p>
              </motion.div>
            )}

            {/* Form */}
            <div onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-zinc-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white transition-all duration-200 disabled:opacity-50"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-zinc-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white transition-all duration-200 disabled:opacity-50"
                  placeholder="Email Address"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-zinc-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white transition-all duration-200 disabled:opacity-50"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 disabled:transform-none disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </motion.div>

          {/* Direct Contact */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-zinc-800 rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-semibold text-zinc-800 dark:text-white mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <a
                href="mailto:rjjason333@email.com"
                className={`
                  flex items-center gap-4 px-6 py-4
                  bg-white dark:bg-zinc-700
                  rounded-xl shadow-sm
                  text-zinc-800 dark:text-white font-medium
                  transition-all duration-300
                  border border-gray-200 dark:border-zinc-600
                  ${hoveredItem === 'email' ? 
                    'transform -translate-y-1 shadow-md' : 
                    'hover:shadow-md'}
                `}
                onMouseEnter={() => setHoveredItem('email')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <FiMail className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Email</p>
                  <p>rjjason333@email.com</p>
                </div>
              </a>

              <a
                href="tel:+94764598738"
                className={`
                  flex items-center gap-4 px-6 py-4
                  bg-white dark:bg-zinc-700
                  rounded-xl shadow-sm
                  text-zinc-800 dark:text-white font-medium
                  transition-all duration-300
                  border border-gray-200 dark:border-zinc-600
                  ${hoveredItem === 'phone' ? 
                    'transform -translate-y-1 shadow-md' : 
                    'hover:shadow-md'}
                `}
                onMouseEnter={() => setHoveredItem('phone')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <FiPhone className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Phone</p>
                  <p>+94 76 459 8738</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;