import React from "react";

const Contact = () => {
  return (
    <section className="py-20 text-center px-4 max-w-3xl mx-auto">
      <span className="inline-block mb-2 text-sm bg-gray-200 px-3 py-1 rounded-full">Let's Connect</span>
      <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
      <p className="text-gray-600 text-lg mb-6">
        Have a project in mind or just want to chat? Feel free to reach out through <strong>LinkedIn</strong>.
      </p>
      <a
        href="https://www.linkedin.com/in/jadeja007/" // replace with your LinkedIn
        target="_blank"
        className="bg-black text-white px-6 py-3 rounded-full inline-block hover:scale-105 transition"
      >
        Connect on LinkedIn
      </a>
    </section>
  );
};

export default Contact;
