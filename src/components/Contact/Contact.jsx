import { useState } from "react";

import SectionTitle from "../SectionTitle/SectionTitle";
import ContactInfoCard from "./ContactInfoCard";
import contactData from "../../data/contactData";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log(formData);

    alert("Message Sent Successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle title="Contact Me" subtitle="Let's Work Together" />

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact Info */}

          <div className="space-y-6">
            {contactData.map((item) => (
              <ContactInfoCard
                key={item.id}
                icon={item.icon}
                title={item.title}
                value={item.value}
              />
            ))}
          </div>

          {/* Contact Form */}

          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-xl bg-white p-8 shadow-lg"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-lg border p-3"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border p-3"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full rounded-lg border p-3"
              required
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-lg border p-3"
              required
            />

            <button className="rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
