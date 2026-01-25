import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { staggerContainer, staggerItem } from '../../config/motion';

const categories = [
  {
    id: 'fete',
    name: 'Fete',
    description: 'Rochițe, bluze și seturi adorabile',
    image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=400&h=500&fit=crop',
    color: 'from-pink-400 to-pink-600',
  },
  {
    id: 'baieti',
    name: 'Băieți',
    description: 'Tricouri, pantaloni și jachete cool',
    image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=400&h=500&fit=crop',
    color: 'from-blue-400 to-blue-600',
  },
  {
    id: 'bebelusi',
    name: 'Bebeluși',
    description: 'Body-uri și seturi confortabile',
    image: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?w=400&h=500&fit=crop',
    color: 'from-purple-400 to-purple-600',
  },
];

export const CategoriesGrid = () => {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container px-4 sm:px-6">
        <SectionHeader
          title="Categorii"
          subtitle="Găsește ținuta perfectă pentru micuțul tău"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {categories.map((category) => (
            <motion.div key={category.id} variants={staggerItem}>
              <Link
                to={`/shop/${category.id}`}
                className="group relative block aspect-[4/5] rounded-2xl overflow-hidden"
              >
                {/* Image */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60`} />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <h3 className="font-heading text-2xl md:text-3xl font-bold mb-2">
                    {category.name}
                  </h3>
                  <p className="text-white/90 text-sm md:text-base mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center gap-2 font-medium group-hover:gap-3 transition-all">
                    <span>Explorează</span>
                    <ArrowRight size={18} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
