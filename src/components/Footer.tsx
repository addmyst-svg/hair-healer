import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal text-brand-parchment pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="text-3xl font-serif font-bold tracking-[0.2em] uppercase mb-6 block text-brand-parchment">
            Hair Healer
          </Link>
          <p className="text-brand-parchment/60 leading-relaxed mb-6 font-sans text-sm font-light">
            Spiritually energised herbal oil crafted with 11 sacred herbs for your hair's natural healing journey. Handcrafted in Rishikesh.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-brand-parchment/20 flex items-center justify-center hover:bg-brand-copper hover:border-brand-copper transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-brand-parchment/20 flex items-center justify-center hover:bg-brand-copper hover:border-brand-copper transition-all">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-brand-copper uppercase text-[10px] tracking-widest font-bold mb-6">Explore</h4>
          <ul className="flex flex-col gap-4 text-[10px] font-sans uppercase tracking-widest font-medium">
            <li><Link to="/" className="hover:text-brand-copper transition-colors">Home</Link></li>
            <li><Link to="/product" className="hover:text-brand-copper transition-colors">The Oil</Link></li>
            <li><Link to="/about" className="hover:text-brand-copper transition-colors">Our Story</Link></li>
            <li><Link to="/faq" className="hover:text-brand-copper transition-colors">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-brand-copper uppercase text-[10px] tracking-widest font-bold mb-6">Legal</h4>
          <ul className="flex flex-col gap-4 text-[10px] font-sans uppercase tracking-widest font-medium text-brand-parchment/60">
            <li><a href="#" className="hover:text-brand-copper transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-brand-copper transition-colors">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-brand-copper transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-brand-copper transition-colors">Refund Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-brand-copper uppercase text-[10px] tracking-widest font-bold mb-6">Contact</h4>
          <ul className="flex flex-col gap-4 text-[10px] font-sans uppercase tracking-widest font-medium text-brand-parchment/60">
            <li className="flex items-center gap-3">
              <Phone size={14} className="text-brand-copper" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={14} className="text-brand-copper" />
              <span>care@hairhealer.in</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={14} className="text-brand-copper" />
              <span>India (INR)</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-parchment/10 pt-8 text-center text-[8px] uppercase tracking-[0.4em] text-brand-parchment/30 px-4 font-sans">
        © {currentYear} Hair Healer Oil • Natural Ayurvedic Care • Free Shipping Across India
      </div>
    </footer>
  );
}
