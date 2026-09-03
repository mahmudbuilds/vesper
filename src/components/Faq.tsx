import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/content';

export const Faq: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 max-w-3xl mx-auto px-4 sm:px-6 border-t border-gray-100 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-12"
      >
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200">
          <HelpCircle className="size-3 text-blue-600" />
          Frequently Asked Questions
        </span>
        <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-gray-900 mt-2">
          Everything you need to know
        </h2>
      </motion.div>

      <div className="space-y-3 font-sans text-sm">
        {FAQ_ITEMS.map((item, idx) => {
          const isOpen = openId === item.id;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen ? 'border-blue-300 bg-blue-50/30 shadow-sm' : 'border-gray-200/80 bg-white hover:border-gray-300'
              }`}
            >
              <button
                onClick={() => toggleFaq(item.id)}
                className="faq-question w-full flex items-center justify-between p-4 sm:p-5 text-left font-medium text-sm sm:text-base md:text-lg text-gray-900 hover:text-blue-600 transition-colors cursor-pointer gap-2"
              >
                <span>{item.question}</span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  className="faq-chevron text-gray-400 shrink-0 ml-2 sm:ml-4 size-6 rounded-full bg-gray-100 flex items-center justify-center"
                >
                  <ChevronDown className="size-4" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-gray-600 text-xs sm:text-sm leading-relaxed border-t border-blue-100/60 pt-3">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
