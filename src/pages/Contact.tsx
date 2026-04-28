import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Send, Instagram, MessageCircle, Mail } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', phone: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    console.log(formState);
    // Real submission would happen here
  };

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        <div>
          <h4 className="text-brand-gold uppercase text-[10px] tracking-[0.3em] font-bold mb-4">Connect With Us</h4>
          <h1 className="text-5xl md:text-6xl font-serif text-brand-brown mb-8 leading-none">We're Here <br /><span className="italic text-brand-gold">To Listen.</span></h1>
          <p className="text-brand-brown/60 leading-relaxed font-light mb-12 text-lg lg:max-w-md">
            Whether you have a question about our healing rituals or want to order directly via WhatsApp, our team is ready to assist your journey.
          </p>

          <div className="space-y-8 mb-12">
            <div className="flex items-center gap-6 group cursor-pointer">
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 bg-green-500/10 text-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"
              >
                <MessageCircle size={28} />
              </a>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-brand-brown/40">WhatsApp Orders</p>
                <p className="text-lg font-serif text-brand-brown">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group cursor-pointer">
              <a 
                href="https://instagram.com/hairhealer.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 bg-pink-500/10 text-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"
              >
                <Instagram size={28} />
              </a>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-brand-brown/40">Instagram DM</p>
                <p className="text-lg font-serif text-brand-brown">@hairhealer.in</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-14 h-14 bg-brand-brown/10 text-brand-brown rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail size={28} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-brand-brown/40">Email Us</p>
                <p className="text-lg font-serif text-brand-brown">care@hairhealer.in</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-brand-brown/5">
          {isSent ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center text-center py-20"
            >
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8">
                <Send size={32} />
              </div>
              <h3 className="text-3xl font-serif text-brand-brown mb-4">Message Sent!</h3>
              <p className="text-brand-brown/50 font-light italic">Your aura reaches us. We'll be in touch soon.</p>
              <button 
                onClick={() => setIsSent(false)} 
                className="mt-8 text-[10px] uppercase font-bold tracking-widest text-brand-brown/40 hover:text-brand-gold transition-colors underline underline-offset-4"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-brown/40 pl-2">Full Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full h-14 bg-brand-cream border-none rounded-2xl px-6 text-sm focus:ring-2 focus:ring-brand-gold transition-all outline-none"
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-brown/40 pl-2">Phone Number</label>
                <input 
                  required
                  type="tel" 
                  placeholder="+91 12345 67890" 
                  className="w-full h-14 bg-brand-cream border-none rounded-2xl px-6 text-sm focus:ring-2 focus:ring-brand-gold transition-all outline-none"
                  onChange={(e) => setFormState({...formState, phone: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-brown/40 pl-2">Message</label>
                <textarea 
                  required
                  placeholder="Tell us about your hair journey..." 
                  className="w-full h-40 bg-brand-cream border-none rounded-2xl p-6 text-sm focus:ring-2 focus:ring-brand-gold transition-all outline-none resize-none"
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                />
              </div>
              <button className="w-full h-16 bg-brand-brown text-brand-beige rounded-2xl font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 shadow-lg hover:bg-brand-olive transition-all group">
                Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
