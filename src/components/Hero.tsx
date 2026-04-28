import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden px-6 lg:px-12">
      {/* Background elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-brand-copper/10 blur-[100px] rounded-full" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[300px] h-[300px] bg-brand-forest/10 blur-[80px] rounded-full" />

      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left z-10"
        >
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="text-[#a68966] italic text-lg font-serif">Ancient Wisdom for Modern Healing</span>
          </div>
          
          <h1 className="text-7xl md:text-8xl font-medium tracking-tight text-brand-charcoal leading-[0.9] mb-12">
            Heal Your<br />
            Hair<br />
            Naturally
          </h1>
          
          <p className="text-lg md:text-xl text-brand-charcoal/70 leading-relaxed max-w-sm mx-auto lg:mx-0 mb-12 font-sans font-light">
            A premium herbal blend infused with 11 sacred herbs, traditionally prepared to reduce hair fall and nourish your scalp from within.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
            <Link 
              to="/product" 
              className="group relative px-10 py-5 bg-brand-forest text-white rounded-full overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 bg-brand-forest-dark scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <span className="relative z-10 font-sans font-bold uppercase tracking-widest text-xs flex items-center gap-3">
                Shop Now — ₹1,499 <ArrowRight size={16} />
              </span>
            </Link>
            
            <Link 
              to="/about"
              className="px-10 py-5 border border-brand-forest text-brand-forest rounded-full font-sans text-xs font-bold uppercase tracking-widest hover:bg-brand-forest hover:text-white transition-all"
            >
              Learn Our Story
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="flex-1 relative"
        >
          <div className="relative z-10 w-full aspect-[4/6] max-w-[450px] mx-auto overflow-hidden oval-mask shadow-[0_50px_100px_-20px_rgba(45,41,38,0.25)] border-4 border-brand-sand">
            <img 
              src="https://images.pexels.com/photos/7796379/pexels-photo-7796379.jpeg" 
              alt="Premium Hair Healer Oil Bottle - Luxury Ayurvedic Apothecary" 
              className="w-full h-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Decorative floating labels */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] left-[-5%] glass-morphism p-4 rounded-2xl shadow-xl z-20 hidden md:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-copper rounded-full flex items-center justify-center text-white">
                <Sparkles size={18} />
              </div>
              <div>
                <p className="text-xs font-bold text-brand-charcoal">11 Rare Herbs</p>
                <p className="text-[10px] text-brand-charcoal/60">Traditional Blend</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[20%] right-[-5%] glass-morphism p-4 rounded-2xl shadow-xl z-20 hidden md:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-forest rounded-full flex items-center justify-center text-white">
                <span className="text-xs font-bold leading-none">100%</span>
              </div>
              <div>
                <p className="text-xs font-bold text-brand-charcoal">Aura Energised</p>
                <p className="text-[10px] text-brand-charcoal/60">For Better Absorption</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <span className="text-[8px] uppercase tracking-[0.3em] font-bold">Discover</span>
        <div className="w-[1px] h-10 bg-brand-charcoal" />
      </motion.div>
    </section>
  );
}
