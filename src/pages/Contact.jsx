import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.name.trim().length < 2) {
      return toast.error("Please enter a valid name.");
    }

    if (!validateEmail(form.email)) {
      return toast.error("Please enter a valid email address.");
    }

    if (form.message.trim().length < 10) {
      return toast.error("Message must be at least 10 characters long.");
    }

    toast.loading("Sending message...");

    emailjs
      .send(
        "service_irbszjh",
        "template_dddbno8",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "LtL1Chg6C50uheOHe"
      )
      .then(() => {
        toast.dismiss();
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        toast.dismiss();
        console.error(err);
        toast.error("Failed to send message.");
      });
  };

  return (
    <section
      id="contact"
      className="w-full px-6 py-20 bg-primary text-white flex flex-col items-center text-center"
    >
      <div className="max-w-xl w-full">
        <h2
          className="text-4xl sm:text-5xl font-bold mb-8"
          data-aos="fade-up"
          data-aos-once="false"
        >
          Contact Me
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 text-left bg-tertiary p-6 rounded-lg shadow-md"
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-once="false"
        >
          <label className="flex flex-col">
            <span className="text-sm mb-1">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="bg-primary border border-gray-600 rounded px-3 py-2 text-white"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-sm mb-1">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="bg-primary border border-gray-600 rounded px-3 py-2 text-white"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-sm mb-1">Your Message</span>
            <textarea
              rows="5"
              name="message"
              value={form.message}
              onChange={handleChange}
              className="bg-primary border border-gray-600 rounded px-3 py-2 text-white"
              required
            />
          </label>
          <button
            type="submit"
            className="bg-[#915EFF] text-white py-2 px-6 rounded hover:bg-opacity-80 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
