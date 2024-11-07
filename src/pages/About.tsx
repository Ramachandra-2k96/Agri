import React from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy, Globe, Sprout, ChevronRight } from 'lucide-react';

export function About() {
  const stats = [
    { value: '10K+', label: 'Active Farmers' },
    { value: '95%', label: 'Success Rate' },
    { value: '50+', label: 'Countries' },
    { value: '24/7', label: 'Support' },
  ];

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief AI Officer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Agriculture',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    },
    {
      name: 'Emma Thompson',
      role: 'Lead Data Scientist',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80"
            alt="Modern farming"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
        </div>
        
        <div className="relative px-4 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="mb-6 text-5xl font-bold md:text-6xl">
              Pioneering the Future of Agriculture
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-gray-300">
              We're on a mission to revolutionize farming through cutting-edge AI technology,
              making sustainable agriculture accessible to everyone.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 gap-8 mt-16 md:grid-cols-4"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="mb-2 text-4xl font-bold text-white">{stat.value}</p>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold">Our Core Values</h2>
            <p className="text-xl text-gray-600">Guided by principles that drive innovation</p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Users, title: "Community First", color: "bg-blue-500" },
              { icon: Trophy, title: "Excellence", color: "bg-yellow-500" },
              { icon: Globe, title: "Sustainability", color: "bg-green-500" },
              { icon: Sprout, title: "Innovation", color: "bg-purple-500" },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 transition-transform transform bg-gradient-to-r from-gray-100 to-white rounded-2xl rotate-6 group-hover:rotate-3" />
                <div className="relative p-8 bg-white shadow-lg rounded-2xl">
                  <div className={`w-12 h-12 ${value.color} rounded-lg flex items-center justify-center mb-6`}>
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                  <p className="text-gray-600">Committed to delivering exceptional value and sustainable solutions.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="px-4 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold">Meet Our Team</h2>
            <p className="text-xl text-gray-600">Experts dedicated to your success</p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full transition-transform duration-500 transform h-96 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="mb-1 text-xl font-semibold text-white">{member.name}</h3>
                    <p className="text-gray-300">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="px-4 mx-auto text-center max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="mb-6 text-4xl font-bold text-white">
              Ready to Transform Your Farm?
            </h2>
            <p className="mb-8 text-xl text-green-100">
              Join thousands of farmers already using our AI-powered solutions
            </p>
            <button className="inline-flex items-center px-8 py-4 font-semibold text-green-600 transition-colors bg-white rounded-full hover:bg-green-50 group">
              Get Started Today
              <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}