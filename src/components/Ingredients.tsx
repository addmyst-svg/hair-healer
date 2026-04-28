import { motion } from 'motion/react';
import { Leaf, Droplets, Sun, Wind } from 'lucide-react';

export default function Ingredients() {
  const herbs = [
    { name: "Amla", benefit: "Vitamin C booster for hair growth", img: "https://images.pexels.com/photos/4871239/pexels-photo-4871239.jpeg" },
    { name: "Hibiscus", benefit: "Natural conditioner & color enhancer", img: "https://images.pexels.com/photos/34928279/pexels-photo-34928279.jpeg" },
    { name: "Brahmi", benefit: "Soothes scalp & strengthens roots", img: "https://images.pexels.com/photos/8326748/pexels-photo-8326748.jpeg" },
    { name: "Bhringraj", benefit: "King of herbs for hair fall", img: "https://images.pexels.com/photos/105028/pexels-photo-105028.jpeg" },
    { name: "Rosemary", benefit: "Improves scalp circulation", img: "https://images.pexels.com/photos/33062495/pexels-photo-33062495.jpeg" },
    { name: "Coconut Oil", benefit: "Deep hydration base", img: "https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg" },
  ];

  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-brand-gold/20 blur-3xl rounded-full" />
            <h4 className="text-brand-copper uppercase text-[10px] tracking-[0.3em] font-bold mb-4">Ethically Sourced</h4>
            <h2 className="text-4xl md:text-6xl font-serif text-brand-charcoal mb-8 leading-[1.1]">
              The Power of <br />
              <span className="italic">11 Sacred Herbs.</span>
            </h2>
            <p className="text-brand-charcoal/70 leading-relaxed font-light mb-12 max-w-lg font-sans">
              We don't believe in chemicals or synthetic fragrances. Every drop of Hair Healer Oil is a concentration of raw herbal power, cold-pressed to retain its curative life force.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-forest/10 text-brand-forest rounded-full flex items-center justify-center shrink-0">
                  <Leaf size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold mb-1 font-sans">Cold-Pressed</p>
                  <p className="text-[10px] text-brand-charcoal/50 font-sans">Nutrients intact</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-copper/10 text-brand-copper rounded-full flex items-center justify-center shrink-0">
                  <Droplets size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold mb-1 font-sans">Additive-Free</p>
                  <p className="text-[10px] text-brand-charcoal/50 font-sans">100% Raw Power</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {herbs.map((herb, index) => (
              <motion.div
                key={herb.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative aspect-square rounded-3xl overflow-hidden shadow-sm"
              >
                <img 
                  src={herb.img} 
                  alt={`${herb.name} - herbal ingredients for hair growth`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                  <p className="text-xs font-bold uppercase tracking-widest font-sans">{herb.name}</p>
                  <p className="text-[8px] font-light mt-1 text-white/80 font-sans">{herb.benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
