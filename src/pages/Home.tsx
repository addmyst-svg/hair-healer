import Hero from '../components/Hero';
import Features from '../components/Features';
import Ingredients from '../components/Ingredients';
import Testimonials from '../components/Testimonials';
import InstagramGrid from '../components/InstagramGrid';
import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Features />
      
      {/* Before/After Section */}
      <section className="py-24 px-6 bg-brand-charcoal text-brand-parchment overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 flex gap-4">
              <div className="flex-1 relative aspect-[3/4] rounded-2xl overflow-hidden border border-brand-parchment/10">
                <img src="https://images.pexels.com/photos/27679976/pexels-photo-27679976.jpeg" alt="Before: Close-up of damaged hair follicles" className="w-full h-full object-cover opacity-60 grayscale" loading="lazy" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 bg-brand-charcoal/80 backdrop-blur px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest">Before</div>
              </div>
              <div className="flex-1 relative aspect-[3/4] rounded-2xl overflow-hidden border border-brand-copper/30">
                <img src="https://images.pexels.com/photos/33306342/pexels-photo-33306342.jpeg" alt="After: Close-up of healthy, lustrous hair strands" className="w-full h-full object-cover" loading="lazy" referrerPolicy="no-referrer" />
                <div className="absolute top-4 right-4 bg-brand-copper px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest text-brand-charcoal">After</div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h4 className="text-brand-copper uppercase text-[10px] tracking-[0.3em] font-bold mb-4">Visible Results</h4>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-parchment mb-8 leading-tight">
                Authentic growth in <br />
                <span className="italic text-brand-copper">90 Days.</span>
              </h2>
              <p className="text-brand-parchment/60 leading-relaxed font-sans font-light mb-10 max-w-lg">
                Consistency is the key to healing. Our formula works with your body's natural rhythm to revitalize dormant follicles and strengthen existing strands.
              </p>
              
              <div className="flex items-center gap-8 mb-12">
                <div>
                  <p className="text-3xl font-serif text-brand-copper">85%</p>
                  <p className="text-[10px] uppercase tracking-widest opacity-40">Less hair fall</p>
                </div>
                <div className="w-[1px] h-10 bg-brand-parchment/10" />
                <div>
                  <p className="text-3xl font-serif text-brand-copper">92%</p>
                  <p className="text-[10px] uppercase tracking-widest opacity-40">Improved shine</p>
                </div>
              </div>
              
              <Link to="/product" className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-brand-copper hover:text-white transition-colors group px-6 py-3 border border-brand-copper rounded-full">
                Read clinical study <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Ingredients />
      <Testimonials />
      <InstagramGrid />
    </main>
  );
}
