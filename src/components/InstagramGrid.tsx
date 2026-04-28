import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';

export default function InstagramGrid() {
  const images = [
    "https://images.pexels.com/photos/7795751/pexels-photo-7795751.jpeg",
    "https://images.pexels.com/photos/34928279/pexels-photo-34928279.jpeg",
    "https://images.pexels.com/photos/33062495/pexels-photo-33062495.jpeg",
    "https://images.pexels.com/photos/4871239/pexels-photo-4871239.jpeg",
    "https://images.pexels.com/photos/105028/pexels-photo-105028.jpeg",
    "https://images.pexels.com/photos/31401742/pexels-photo-31401742.jpeg",
  ];

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 mb-4">
          <Instagram size={18} className="text-brand-copper" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-copper font-sans">@hairhealer.in</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-serif text-brand-charcoal">Your Hair Healing <br /> <span className="italic text-brand-copper">Journey.</span></h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 px-2">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="group relative aspect-square overflow-hidden bg-brand-parchment"
          >
            <img 
              src={img} 
              alt={`Ayurvedic care ritual post ${index + 1}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-copper/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
              <Instagram className="text-white" size={32} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
