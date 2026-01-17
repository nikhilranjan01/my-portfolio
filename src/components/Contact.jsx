import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="scroll-mt-28 py-24 bg-white px-6 md:px-16"
    >



      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-6"
        >
          Contact <span className="text-red-500">Me</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-600 mb-14"
        >
          Have a project, opportunity, or just want to say hello?
          Feel free to reach out!
        </motion.p>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            bg-white rounded-2xl
            shadow-xl
            p-8 md:p-12
            border border-gray-100
            hover:shadow-[0_0_30px_rgba(239,68,68,0.25)]
            transition
          "
        >
          <form
            action="https://formspree.io/f/meoepjze"
            method="POST"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="
                  w-full px-4 py-3
                  rounded-lg
                  border border-gray-300
                  focus:outline-none
                  focus:ring-2 focus:ring-red-400
                "
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="
                  w-full px-4 py-3
                  rounded-lg
                  border border-gray-300
                  focus:outline-none
                  focus:ring-2 focus:ring-red-400
                "
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                required
                placeholder="Write your message here..."
                className="
                  w-full px-4 py-3
                  rounded-lg
                  border border-gray-300
                  resize-none
                  focus:outline-none
                  focus:ring-2 focus:ring-red-400
                "
              ></textarea>
            </div>

            {/* BUTTON (SOCIAL STYLE) */}
            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="
                  inline-flex items-center gap-2
                  px-8 py-3
                  border-2 border-red-500
                  text-red-500
                  rounded-full
                  font-medium
                  transition-all duration-300
                  hover:bg-red-500 hover:text-white
                  hover:-translate-y-1
                "
              >
                <i className="fa-solid fa-paper-plane"></i>
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
