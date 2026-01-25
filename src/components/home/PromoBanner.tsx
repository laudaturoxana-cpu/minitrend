import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Percent } from 'lucide-react';
import { Button } from '../ui/Button';
import { fadeInUp } from '../../config/motion';

interface PromoBannerProps {
  title?: string;
  subtitle?: string;
  discount?: string;
  link?: string;
  buttonText?: string;
  backgroundImage?: string;
}

export const PromoBanner = ({
  title = 'Super Reduceri',
  subtitle = 'Până la 50% discount la colecția de sezon',
  discount = '-50%',
  link = '/shop?filter=sale',
  buttonText = 'Cumpără Acum',
  backgroundImage = 'https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=1200&h=400&fit=crop',
}: PromoBannerProps) => {
  return (
    <section className="py-8 md:py-12">
      <div className="container px-4 sm:px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative rounded-2xl md:rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0">
            <img
              src={backgroundImage}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80" />
          </div>

          {/* Content */}
          <div className="relative px-6 py-12 md:px-12 md:py-16 lg:py-20 text-white">
            <div className="w-full flex justify-center">
              <div className="flex flex-col items-center text-center max-w-xl">
                {/* Discount badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-bold mb-6">
                  <Percent size={18} />
                  <span>{discount}</span>
                </div>

                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center w-full">
                  {title}
                </h2>

                <p className="text-white/90 text-lg md:text-xl mb-8 text-center w-full">
                  {subtitle}
                </p>

                <Link to={link}>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="bg-white text-primary hover:bg-gray-100"
                  >
                    {buttonText}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
