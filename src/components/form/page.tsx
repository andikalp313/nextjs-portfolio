"use client";

import React, { useState } from "react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

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
    <section
      id="contact"
      className="bg-gradient-to-r from-gray-800 to-gray-900 py-10 text-white"
    >
      <div className="container mx-auto my-11 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Bagian Informasi Kontak */}
          <motion.div
            className="space-y-4 text-gray-300"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-blue-400 hover:text-yellow-500">
              Contact <span className="text-white">Me</span>
            </h2>
            <p className="mb-8">
              Have questions or want to collaborate? Contact me via email or
              WhatsApp.
            </p>
            <p>
              <span className="font-bold">Address: </span>Weru, Sukoharjo, Jawa
              Tengah, Indonesia
            </p>
            <p>
              <span className="font-bold">Telephone: </span>+62 8217 8342 897
            </p>
            <p>
              <span className="font-bold">Email: </span>
              <a
                href="mailto:andikaluhurpambudi@gmail.com"
                className="text-blue-400 hover:underline"
              >
                andikaluhurpambudi@gmail.com
              </a>
            </p>
            <p>
              <span className="font-bold">Website: </span>
              <a
                href="http://www.andikalp.com"
                className="text-blue-400 hover:underline"
              >
                www.andikalp.com
              </a>
            </p>
          </motion.div>

          {/* Bagian Formulir */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-md bg-gray-800 p-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="h-32 w-full rounded-md bg-gray-800 p-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            ></textarea>
            <div className="flex space-x-4">
              <motion.button
                onClick={sendEmail}
                className="flex w-full items-center justify-center rounded-md bg-blue-500 p-3 text-white transition-colors duration-300 hover:bg-yellow-600"
                whileHover={{ scale: 1.05 }} // Scale up on hover
              >
                <FaEnvelope className="mr-2" /> Kirim ke Email
              </motion.button>
              <motion.button
                onClick={sendWhatsApp}
                className="flex w-full items-center justify-center rounded-md bg-green-500 p-3 text-white transition-colors duration-300 hover:bg-green-600"
                whileHover={{ scale: 1.05 }} // Scale up on hover
              >
                <FaWhatsapp className="mr-2" /> Kirim ke WhatsApp
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
