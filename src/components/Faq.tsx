import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/content';

export const Faq: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 max-w-3xl mx-auto px-4 sm:px-6 border-t border-gray-100 overflow-hidden">
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-10">
        Frequently asked questions
      </h2>

      <div className="space-y-4 font-sans text-sm">
        {FAQ_ITEMS.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div key={item.id} className="border-b border-gray-200 pb-4">
              <button
                onClick={() => toggleFaq(item.id)}
                className="faq-question w-full flex items-center justify-between py-2 text-left font-medium text-base sm:text-lg text-gray-900 hover:text-blue-600 transition-colors cursor-pointer"
              >
                <span>{item.question}</span>
                <span
                  className={`faq-chevron transition-transform duration-300 text-gray-400 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                >
                  <ChevronDown className="size-4 text-gray-400" />
                </span>
              </button>
              <div className={`accordion-wrapper ${isOpen ? 'open' : ''}`}>
                <div className="accordion-content pt-2 text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
