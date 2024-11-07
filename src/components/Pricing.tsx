import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: "Free",
    price: "0₹",
    features: [
      "Basic soil analysis",
      "Limited weather insights",
      "Community access",
      "Basic yield predictions",
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Pro",
    price: "100₹",
    features: [
      "Advanced AI soil analysis",
      "Real-time weather insights",
      "Priority community access",
      "Advanced yield predictions",
      "Expert consultation (2/month)",
      "Premium resources access"
    ],
    cta: "Start Pro",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Custom AI solutions",
      "Dedicated support team",
      "Unlimited consultations",
      "Custom integrations",
      "Advanced analytics",
      "White-label options"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

export function Pricing() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600">Choose the plan that's right for your farm</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative group bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                plan.popular ? 'ring-2 ring-green-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 py-2 text-sm font-medium text-center text-white bg-green-500">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="mb-4 text-2xl font-bold text-gray-900">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    {typeof plan.price === 'number' ? '₹' : ''}{plan.price}
                  </span>
                  {typeof plan.price === 'number' && (
                    <span className="text-gray-600">/month</span>
                  )}
                </div>
                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-600 transition-colors group-hover:text-gray-900">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={plan.name === 'Enterprise' ? '/contact' : '/signup'}
                  className={`block w-full py-3 px-6 rounded-lg text-center font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-green-600 text-white hover:bg-green-700 transform group-hover:scale-105'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}