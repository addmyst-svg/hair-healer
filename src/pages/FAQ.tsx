import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  faq: {
    question: string;
    answer: string;
  };
}

export default function FAQ() {
  const faqs = [
    {
      question: "How long does it take to see results?",
      answer: "While some customers see a reduction in hair fall within 10-15 days, we recommend consistent use for at least 3 months (the typical hair growth cycle) to see visible thickness and health changes."
    },
    {
      question: "Is it suitable for all hair types?",
      answer: "Yes, our oil is formulated using cold-pressed oils that are balanced to suit oily, dry, and normal scalps. For very oily scalps, we recommend using it 2 hours before washing instead of overnight."
    },
    {
      question: "Does it help with premature greying?",
      answer: "Our oil contains high amounts of Bhringraj and Hibiscus, traditional ingredients known for slowing down premature greying and naturally darkening hair with regular use."
    },
    {
      question: "How is it 'spiritually energised'?",
      answer: "We handcrafted each batch with mindful intentions. The process happens in a noise-free, high-vibration environment while ancient healing mantras are chanted, which we believe optimizes the botanical energy of the herbs."
    },
    {
      question: "Can men use this oil too?",
      answer: "Absolutely! Hair Healer is gender-neutral. It works effectively for male-pattern thinning and scalp health as well."
    },
    {
      question: "Is it safe for chemically treated or colored hair?",
      answer: "Yes, it is 100% natural and free from chemicals, making it perfectly safe for use on keratin-treated or colored hair. It actually helps in repairing the damage caused by those treatments."
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h4 className="text-brand-gold uppercase text-[10px] tracking-[0.3em] font-bold mb-4">Common Questions</h4>
        <h1 className="text-5xl md:text-6xl font-serif text-brand-brown">F.A.Q.</h1>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} faq={faq} />
        ))}
      </div>

      <div className="mt-20 p-12 bg-white rounded-[40px] text-center border border-brand-brown/5">
        <h3 className="text-2xl font-serif text-brand-brown mb-4">Still have questions?</h3>
        <p className="text-brand-brown/50 font-light mb-8">Reach out to us on WhatsApp or Instagram for a personalised consultation.</p>
        <button className="px-8 py-4 bg-brand-gold text-white rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:bg-brand-brown transition-all">
          Talk to an expert
        </button>
      </div>
    </div>
  );
}

const FAQItem: React.FC<FAQItemProps> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`rounded-3xl transition-all duration-500 overflow-hidden ${isOpen ? 'bg-white shadow-xl pt-2' : 'bg-brand-cream'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 px-8 text-left group"
      >
        <span className={`text-lg font-serif transition-colors duration-300 ${isOpen ? 'text-brand-gold' : 'text-brand-brown'}`}>
          {faq.question}
        </span>
        <div className={`p-2 rounded-full transition-transform duration-500 ${isOpen ? 'bg-brand-gold text-white rotate-180' : 'bg-brand-brown/5'}`}>
          <ChevronDown size={20} />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-8 pb-8 text-sm font-light leading-relaxed text-brand-brown/60">
              <div className="h-[1px] w-full bg-brand-brown/5 mb-6" />
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
