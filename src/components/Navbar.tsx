import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X, Instagram, Phone } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'The Oil', path: '/product' },
    { name: 'Our Story', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="glass-morphism mx-4 my-4 rounded-2xl px-6 py-4 flex items-center justify-between shadow-sm">
        <Link to="/" className="text-2xl font-serif font-bold tracking-[0.2em] uppercase text-brand-forest">
          Hair Healer
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-[10px] uppercase tracking-[0.3em] font-sans font-bold text-brand-charcoal/80 hover:text-brand-copper transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link to="/product" className="p-2 bg-brand-charcoal text-brand-parchment rounded-full hover:bg-brand-charcoal/90 transition-all">
            <ShoppingBag size={18} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <Link to="/product" className="p-2 text-brand-brown">
            <ShoppingBag size={22} />
          </Link>
          <button onClick={() => setIsOpen(true)} className="p-1 text-brand-brown">
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-brand-cream z-[60] flex flex-col p-8"
          >
            <div className="flex justify-end mb-12">
              <button onClick={() => setIsOpen(false)} className="p-2 text-brand-brown">
                <X size={32} />
              </button>
            </div>
            
            <div className="flex flex-col gap-8 items-center text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-serif font-medium text-brand-brown hover:text-brand-gold"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-auto flex justify-center gap-6 pb-8">
              <a href="#" className="p-3 bg-brand-brown/5 rounded-full text-brand-brown">
                <Instagram size={24} />
              </a>
              <a href="#" className="p-3 bg-brand-brown/5 rounded-full text-brand-brown">
                <Phone size={24} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
