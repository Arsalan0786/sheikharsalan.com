import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function HireMePage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_id', 'template_id', form.current, 'user_id')
      .then(() => {
        alert('Message Sent Successfully! ✅');
      }, () => {
        alert('Failed to Send Message! ❌');
      });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-10">
      <h2 className="text-3xl font-bold mb-6">Hire Me 🚀</h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <input type="text" name="user_name" placeholder="Your Name" className="w-full p-3 bg-gray-800 text-white rounded-lg" />
        <input type="email" name="user_email" placeholder="Your Email" className="w-full p-3 bg-gray-800 text-white rounded-lg" />
        <textarea name="message" placeholder="Your Message" rows="5" className="w-full p-3 bg-gray-800 text-white rounded-lg"></textarea>
        <button type="submit" className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-all">
          Send Message 🚀
        </button>
      </form>
    </div>
  );
}
