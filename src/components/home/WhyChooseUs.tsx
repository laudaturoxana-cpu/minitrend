import { motion } from 'framer-motion';
import { Heart, Leaf, Award, Smile } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { staggerContainer, staggerItem } from '../../config/motion';

const reasons = [
  {
    icon: <Heart size={28} />,
    title: 'Materiale Premium',
    description: 'Doar țesături de cea mai înaltă calitate, delicate cu pielea sensibilă a copiilor.',
  },
  {
    icon: <Leaf size={28} />,
    title: 'Eco-Friendly',
    description: 'Produse sustenabile, din materiale organice și procese de producție ecologice.',
  },
  {
    icon: <Award size={28} />,
    title: 'Design Original',
    description: 'Modele create de designeri români, inspirate din tendințele internaționale.',
  },
  {
    icon: <Smile size={28} />,
    title: 'Confort Maxim',
    description: 'Croieli ergonomice care permit libertatea de mișcare pentru cei mici.',
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 sm:px-6">
        <SectionHeader
          title="De ce să alegi MiniTrend?"
          subtitle="Ne pasă de fiecare detaliu pentru că ne pasă de copiii tăi"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={staggerItem}
              className="text-center p-6 rounded-2xl bg-cream/50 hover:bg-cream transition-colors"
            >
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-primary/10 text-primary rounded-2xl">
                {reason.icon}
              </div>
              <h3 className="font-heading font-bold text-text-primary text-lg mb-2">
                {reason.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
