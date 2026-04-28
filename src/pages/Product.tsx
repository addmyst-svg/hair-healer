import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MessageCircle, ShoppingCart, Leaf, Wind, Sun, ChevronUp, ChevronDown } from 'lucide-react';

export default function Product() {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('benefits');

  const tabs = [
    { id: 'benefits', label: 'Benefits' },
    { id: 'ingredients', label: 'Ingredients' },
    { id: 'usage', label: 'How to use' },
  ];

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Product Images */}
        <div className="space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="aspect-[4/5] rounded-[40px] overflow-hidden bg-brand-parchment shadow-sm"
          >
            <img 
              src="https://images.pexels.com/photos/31401742/pexels-photo-31401742.jpeg" 
              alt="Hair Healer Premium Oil - Luxury Ayurvedic Apothecary" 
              className="w-full h-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <div className="grid grid-cols-3 gap-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-brand-parchment cursor-pointer border border-transparent hover:border-brand-copper transition-all">
              <img src="https://images.pexels.com/photos/3987150/pexels-photo-3987150.jpeg" className="w-full h-full object-cover" alt="Oil dropper detail" loading="lazy" referrerPolicy="no-referrer" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden bg-brand-parchment cursor-pointer border border-transparent hover:border-brand-copper transition-all">
              <img src="https://images.pexels.com/photos/7795751/pexels-photo-7795751.jpeg" className="w-full h-full object-cover" alt="Luxury scalp massage ritual" loading="lazy" referrerPolicy="no-referrer" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden bg-brand-parchment cursor-pointer border border-transparent hover:border-brand-copper transition-all">
              <img src="https://images.pexels.com/photos/3738341/pexels-photo-3738341.jpeg" className="w-full h-full object-cover" alt="Luxury oil pouring ritual" loading="lazy" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 text-brand-gold mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            <span className="text-xs font-bold tracking-widest text-brand-brown/40 ml-2">450+ VERIFIED REVIEWS</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-serif text-brand-brown mb-4 tracking-tight leading-none">Hair Healer <br /><span className="italic text-brand-gold">Premium Oil.</span></h1>
          
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl font-serif text-brand-brown">₹1,499</span>
            <span className="text-lg text-brand-brown/40 line-through">₹1,999</span>
            <span className="bg-brand-gold/20 text-brand-gold text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Saving 25%</span>
          </div>

          <p className="text-brand-brown/60 leading-relaxed font-light mb-10 text-lg">
            A spiritually-energised, artisanal blend of 11 cold-pressed herbs that work intensely on the scalp to stop hair fall and promote thick, lustrous growth.
          </p>

          {/* Features pills */}
          <div className="flex flex-wrap gap-3 mb-10">
            <div className="flex items-center gap-2 px-4 py-2 border border-brand-brown/10 rounded-full text-xs font-medium text-brand-brown/80">
              <Leaf size={14} className="text-brand-olive" /> Herbal
            </div>
            <div className="flex items-center gap-2 px-4 py-2 border border-brand-brown/10 rounded-full text-xs font-medium text-brand-brown/80">
              <Wind size={14} className="text-brand-gold" /> Lightweight
            </div>
            <div className="flex items-center gap-2 px-4 py-2 border border-brand-brown/10 rounded-full text-xs font-medium text-brand-brown/80">
              <Sun size={14} className="text-brand-olive" /> Ayurvedic
            </div>
          </div>

          {/* Purchase section */}
          <div className="mb-12 space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-brand-brown/20 rounded-xl overflow-hidden h-14">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-5 hover:bg-brand-brown/5 transition-colors"
                >
                  <ChevronDown size={18} />
                </button>
                <span className="w-10 text-center font-bold">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-5 hover:bg-brand-brown/5 transition-colors"
                >
                  <ChevronUp size={18} />
                </button>
              </div>
              
              <button className="flex-1 h-14 bg-brand-brown text-brand-beige rounded-xl font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 shadow-lg hover:bg-brand-olive transition-all">
                <ShoppingCart size={18} /> Add to Cart
              </button>
            </div>
            
            <a 
              href={`https://wa.me/919876543210?text=${encodeURIComponent("Hi! I'd like to order the Hair Healer Oil.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-14 border border-brand-brown text-brand-brown rounded-xl font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-brand-brown hover:text-brand-beige transition-all"
            >
              <MessageCircle size={18} /> DM to Order (WhatsApp)
            </a>
          </div>

          {/* Info Tabs */}
          <div className="border-t border-brand-brown/10 pt-8">
            <div className="flex gap-8 mb-8 border-b border-brand-brown/5">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-4 text-xs font-bold uppercase tracking-widest transition-all relative ${
                    activeTab === tab.id ? 'text-brand-brown' : 'text-brand-brown/30'
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div layoutId="underline" className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-gold" />
                  )}
                </button>
              ))}
            </div>

            <div className="min-h-[150px]">
              <AnimatePresence mode="wait">
                {activeTab === 'benefits' && (
                  <motion.div 
                    key="benefits"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-sm font-light leading-relaxed text-brand-brown/60 space-y-4"
                  >
                    <p>• Stimulates dormant follicles for rapid growth.</p>
                    <p>• Reduces hair fall significantly within 21 days.</p>
                    <p>• Prevents premature greying using Bhringraj extract.</p>
                    <p>• Deeply nourishes the scalp and cures dandruff naturally.</p>
                  </motion.div>
                )}
                {activeTab === 'ingredients' && (
                  <motion.div 
                    key="ingredients"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-sm font-light leading-relaxed text-brand-brown/60"
                  >
                    Cold-pressed Coconut Oil, Amla (Indian Gooseberry), Brahmi, Bhringraj, Hibiscus petals, Rosemary essential oil, Fenugreek seeds, Black Seed oil, Neem, Curry leaves, and holy Tulsi.
                  </motion.div>
                )}
                {activeTab === 'usage' && (
                  <motion.div 
                    key="usage"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-sm font-light leading-relaxed text-brand-brown/60 space-y-4"
                  >
                    <p><strong>Step 1:</strong> Warm the oil slightly in your palms.</p>
                    <p><strong>Step 2:</strong> Gently massage into your scalp using circular motions for 10 minutes.</p>
                    <p><strong>Step 3:</strong> Leave it on for at least 2 hours or overnight for deep penetration.</p>
                    <p><strong>Step 4:</strong> Wash with a mild, sulphate-free shampoo. Repeat 2-3 times a week.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
      
      {/* Reviews Section */}
      <section className="mt-32 pt-24 border-t border-brand-brown/10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-brand-brown">Community Feedback</h2>
          <div className="flex justify-center gap-1 text-brand-gold mt-4 mb-2">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
          </div>
          <p className="text-sm font-bold opacity-40 uppercase tracking-widest text-brand-brown">4.9 Based on 452 Customer Reviews</p>
        </div>
        
        {/* Placeholder reviews would go here, reusing the same style as Home testimonials */}
      </section>
    </div>
  );
}
