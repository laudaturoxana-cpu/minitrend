import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { Avatar } from '../ui/Avatar';
import { staggerContainer, staggerItem } from '../../config/motion';

const testimonials = [
  {
    id: 1,
    name: 'Maria P.',
    avatar: 'https://i.pravatar.cc/150?img=1',
    rating: 5,
    text: 'Calitate excepțională! Fiica mea adoră rochițele de aici. Materialele sunt foarte moi și confortabile.',
    date: 'Ianuarie 2026',
  },
  {
    id: 2,
    name: 'Andrei M.',
    avatar: 'https://i.pravatar.cc/150?img=12',
    rating: 5,
    text: 'Livrare rapidă și produse exact ca în poze. Băiețelul meu arată super în tricouri! Recomand cu încredere.',
    date: 'Ianuarie 2026',
  },
  {
    id: 3,
    name: 'Elena D.',
    avatar: 'https://i.pravatar.cc/150?img=5',
    rating: 5,
    text: 'Am comandat pentru gemenii mei și sunt foarte mulțumită. Design-uri adorabile și prețuri accesibile.',
    date: 'Decembrie 2025',
  },
];

export const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container px-4 sm:px-6">
        <SectionHeader
          title="Ce spun părinții"
          subtitle="Mii de familii fericite au ales MiniTrend"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={staggerItem}
              className="bg-white rounded-2xl p-6 shadow-soft relative"
            >
              {/* Quote icon */}
              <Quote
                size={40}
                className="absolute top-4 right-4 text-primary/10"
              />

              {/* Rating */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-text-secondary leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <Avatar
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  size="md"
                />
                <div>
                  <p className="font-medium text-text-primary">{testimonial.name}</p>
                  <p className="text-sm text-text-light">{testimonial.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
