import { motion } from 'motion/react';
import { Droplet, ShieldCheck, TrendingUp, Sparkles } from 'lucide-react';

export default function Features() {
  const highlights = [
    {
      title: "Heals",
      description: "Repairs damaged hair follicles from within using Brahmi and Amla.",
      icon: <Droplet className="text-brand-forest" />,
      color: "bg-brand-forest/10"
    },
    {
      title: "Protects",
      description: "Creates a natural barrier against pollution and environmental stressors.",
      icon: <ShieldCheck className="text-brand-charcoal" />,
      color: "bg-brand-charcoal/10"
    },
    {
      title: "Grows",
      description: "Stimulates scalp circulation to boost thicker, faster hair growth.",
      icon: <TrendingUp className="text-brand-copper" />,
      color: "bg-brand-copper/10"
    },
    {
      title: "Energised",
      description: "Infused with positive intentions during the handcrafted process.",
      icon: <Sparkles className="text-brand-forest" />,
      color: "bg-brand-forest/10"
    }
  ];

  return (
    <section className="py-24 px-6 bg-brand-parchment">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-charcoal mb-6">Haircare with Soul</h2>
          <p className="text-brand-charcoal/60 max-w-2xl mx-auto font-sans font-light leading-relaxed">
            Our unique process blends ancient Himalayan wisdom with spiritual energization for a healing experience that goes beyond surface shining.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all group border border-brand-sand/50"
            >
              <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-brand-charcoal mb-3 tracking-wide">{item.title}</h3>
              <p className="text-sm text-brand-charcoal/60 leading-relaxed font-sans font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
