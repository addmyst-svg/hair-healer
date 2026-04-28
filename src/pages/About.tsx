import { motion } from 'motion/react';
import { Sparkles, Heart, Leaf } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-gold/10 border border-brand-gold/20 rounded-full mb-8"
          >
            <Sparkles size={14} className="text-brand-gold" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">
              Our Ancestral Journey
            </span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-brand-brown leading-[1.1] mb-8">
            The Soul of <br />
            <span className="italic text-brand-gold">Hair Healer.</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-square bg-brand-cream rounded-[100px] overflow-hidden rotate-[-2deg] shadow-2xl"
          >
            <img 
              src="https://images.pexels.com/photos/18186006/pexels-photo-18186006.jpeg" 
              alt="Luxury Ayurvedic herbal preparation ritual" 
              className="w-full h-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <div className="space-y-8">
            <h2 className="text-4xl font-serif text-brand-brown">Handcrafted with Intention</h2>
            <p className="text-brand-brown/70 leading-relaxed font-light text-lg">
              Hair Healer began with a simple mission: to bring back the purity of ancestral haircare routines. Our founder, inspired by Himalayan herbal traditions, discovered that the effectiveness of herbs is magnified when handled with spiritual intention and sacred methods.
            </p>
            <p className="text-brand-brown/70 leading-relaxed font-light text-lg">
              Each batch of Hair Healer Oil is brewed in small copper vessels, following the lunar cycles and infused with positive mantras to ensure that the oil doesn't just treat your scalp, but heals your aura.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf size={20} />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-brand-brown/60">100% Herbal</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-olive/10 text-brand-olive rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles size={20} />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-brand-brown/60">Energised</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-brown/10 text-brand-brown rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart size={20} />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-brand-brown/60">Cruelty Free</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-brand-brown rounded-[60px] p-12 md:p-24 text-center text-brand-cream relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 blur-[100px] rounded-full" />
          <div className="relative z-10">
            <h3 className="text-4xl md:text-6xl font-serif mb-8">Our Mission</h3>
            <p className="text-xl md:text-2xl text-brand-cream/70 font-light max-w-3xl mx-auto leading-relaxed">
              "To heal humanity's relationship with nature, one strand at a time. We believe true beauty is an extension of inner health and spiritual harmony."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
