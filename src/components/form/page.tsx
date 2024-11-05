"use client";

import React, { useState } from "react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // Fungsi untuk mengirim email
  const sendEmail = () => {
    const email = "andikaluhurpambudi@gmail.com"; // Ganti dengan email Anda
    const subject = `Pesan dari ${name}`;
    const body = `Halo, nama saya ${name}. ${message}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  // Fungsi untuk mengirim pesan WhatsApp
  const sendWhatsApp = () => {
    const phone = "+6282178342897"; // Ganti dengan nomor WhatsApp Anda dalam format internasional
    const text = `Halo, nama saya ${name}. ${message}`;
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="bg-gray-900 py-10 text-white">
      <div className="container mx-auto my-11 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Bagian Informasi Kontak */}
          <div className="space-y-4 text-gray-400">
            <h2 className="mb-4 text-3xl font-bold text-blue-500 hover:text-yellow-400 dark:text-blue-500">
              Contact <span className="text-white">Me</span>
            </h2>
            <p className="mb-8 text-gray-400">
              Have questions or want to collaborate? Contact me via email or
              WhatsApp
            </p>
            <p>
              <span className="font-bold text-white">address: </span>Weru,
              Sukoharjo, Jawa Tengah, Indonesia
            </p>
            <p>
              <span className="font-bold text-white">Telephone: </span>+62 8217
              8342 897
            </p>
            <p>
              <span className="font-bold text-white">Email: </span>
              andikaluhurpambudi@gmail.com
            </p>
            <p>
              <span className="font-bold text-white">Website: </span>
              www.andikalp.com
            </p>
          </div>

          {/* Bagian Formulir */}
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-md bg-gray-800 p-3 text-gray-300 placeholder-gray-500 focus:outline-none"
            />
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="h-32 w-full rounded-md bg-gray-800 p-3 text-gray-300 placeholder-gray-500 focus:outline-none"
            ></textarea>
            <div className="flex space-x-4">
              <button
                onClick={sendEmail}
                className="flex w-full items-center justify-center rounded-md bg-blue-500 p-3 text-white transition-colors duration-300 hover:bg-yellow-600"
              >
                <FaEnvelope className="mr-2" /> Kirim ke Email
              </button>
              <button
                onClick={sendWhatsApp}
                className="flex w-full items-center justify-center rounded-md bg-green-500 p-3 text-white transition-colors duration-300 hover:bg-green-600"
              >
                <FaWhatsapp className="mr-2" /> Kirim ke WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
