import { Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      text: "I was losing so much hair post-COVID. Within 3 weeks of using Hair Healer, the hair fall significantly reduced. My scalp feels so much calmer now.",
      rating: 5,
      image: "https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg"
    },
    {
      name: "Rahul Mehra",
      location: "Delhi",
      text: "The smell is so calming. I used to have a very dry scalp, but this oil has regulated it. My hair looks thicker and has a natural shine.",
      rating: 5,
      image: "https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg"
    },
    {
      name: "Ananya Iyer",
      location: "Bangalore",
      text: "You can truly feel the intention behind this oil. It's not just hair oil; it's a ritual. My curls have never looked better!",
      rating: 5,
      image: "https://images.pexels.com/photos/3762802/pexels-photo-3762802.jpeg"
    }
  ];

  return (
    <section className="py-24 px-6 bg-brand-parchment">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h4 className="text-brand-copper uppercase text-[10px] tracking-[0.3em] font-bold mb-4">Community Stories</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-charcoal leading-tight">
              Loved by thousands seeking <br />
              <span className="italic text-brand-copper">True Healing.</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 text-brand-charcoal bg-brand-sand/50 px-6 py-3 rounded-full border border-brand-charcoal/10">
            <span className="text-2xl font-serif font-bold">4.9/5</span>
            <div className="flex gap-1 text-brand-copper">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-charcoal/40 ml-2 font-sans">Appreciated globally</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-[40px] shadow-sm relative border border-brand-sand"
            >
              <div className="flex gap-1 text-brand-copper mb-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-brand-charcoal italic leading-relaxed mb-10 font-serif text-lg">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={`${testimonial.name} - healthy long hair`} 
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h5 className="text-sm font-bold text-brand-charcoal font-sans">{testimonial.name}</h5>
                  <p className="text-[10px] text-brand-charcoal/40 uppercase tracking-widest font-sans">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
