import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <div className="pt-16">
      <section className="py-20 bg-green-50">
        <div className="px-4 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Get in Touch
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Have questions about our platform? We're here to help you get started
              with AI-powered farming.
            </p>
          </motion.div>

          <div className="grid gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="p-8 bg-white shadow-lg rounded-xl"
            >
              <h2 className="mb-6 text-2xl font-bold">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 font-semibold text-white transition-colors bg-green-600 rounded-lg hover:bg-green-700"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="p-6 bg-white shadow-lg rounded-xl">
                <MapPin className="w-6 h-6 mb-4 text-green-600" />
                <h3 className="mb-2 text-lg font-semibold">Our Location</h3>
                <p className="text-gray-600">
                  312 Tech Park, Innovation District
                  <br />
                  Bangalore, Karnataka 560001
                </p>
              </div>

              <div className="p-6 bg-white shadow-lg rounded-xl">
                <Phone className="w-6 h-6 mb-4 text-green-600" />
                <h3 className="mb-2 text-lg font-semibold">Phone</h3>
                <p className="text-gray-600">+91 8899007766</p>
              </div>

              <div className="p-6 bg-white shadow-lg rounded-xl">
                <Mail className="w-6 h-6 mb-4 text-green-600" />
                <h3 className="mb-2 text-lg font-semibold">Email</h3>
                <p className="text-gray-600">support@agrinext.com</p>
              </div>

              <div className="p-6 bg-white shadow-lg rounded-xl">
                <Clock className="w-6 h-6 mb-4 text-green-600" />
                <h3 className="mb-2 text-lg font-semibold">Business Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: 9:00 AM - 1:00 PM
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}