import { Truck, Shield, RefreshCw, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '../../config/motion';

const features = [
  {
    icon: <Truck size={24} />,
    title: 'Livrare Rapidă',
    description: 'Gratuită peste 200 Lei',
  },
  {
    icon: <Shield size={24} />,
    title: 'Plată Securizată',
    description: 'Criptare SSL',
  },
  {
    icon: <RefreshCw size={24} />,
    title: 'Retur Gratuit',
    description: '30 zile garanție',
  },
  {
    icon: <CreditCard size={24} />,
    title: 'Plată în Rate',
    description: 'Fără dobândă',
  },
];

export const FeaturesStrip = () => {
  return (
    <section className="py-8 md:py-12 bg-white border-y border-gray-100">
      <div className="container px-4 sm:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={staggerItem}
              className="flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-xl mb-3">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-text-primary text-sm md:text-base mb-1">
                {feature.title}
              </h3>
              <p className="text-xs md:text-sm text-text-secondary">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
