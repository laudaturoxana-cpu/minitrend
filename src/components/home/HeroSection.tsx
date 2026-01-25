import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';
import { fadeInUp, staggerContainer, staggerItem } from '../../config/motion';

export const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-cream via-white to-primary/5 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 sm:px-6 py-16 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={staggerItem} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                <Sparkles size={16} />
                Colecția Nouă 2026
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={staggerItem}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6 leading-tight"
            >
              Fashion pentru{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                prichindei
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={staggerItem}
              className="text-text-secondary text-lg md:text-xl mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Descoperă cele mai adorabile ținute pentru copii.
              Calitate premium, design-uri unice și confort maxim.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={staggerItem}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link to="/shop">
                <Button size="lg" icon={<ArrowRight size={20} />} iconPosition="right">
                  Explorează Colecția
                </Button>
              </Link>
              <Link to="/shop?filter=new">
                <Button variant="outline" size="lg">
                  Noutăți
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={staggerItem}
              className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12"
            >
              <Stat value="500+" label="Produse" />
              <Stat value="10k+" label="Clienți fericiți" />
              <Stat value="4.9" label="Rating" />
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square">
              {/* Main image */}
              <div className="absolute inset-8 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&h=600&fit=crop"
                  alt="Copil îmbrăcat în haine MiniTrend"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute top-4 right-0 bg-white rounded-2xl shadow-card p-4"
              >
                <p className="text-sm font-medium text-text-primary">Livrare gratuită</p>
                <p className="text-xs text-text-secondary">Peste 200 Lei</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute bottom-8 left-0 bg-white rounded-2xl shadow-card p-4"
              >
                <p className="text-sm font-medium text-text-primary">Retur gratuit</p>
                <p className="text-xs text-text-secondary">30 de zile</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center lg:text-left">
    <p className="font-heading text-2xl md:text-3xl font-bold text-primary">{value}</p>
    <p className="text-sm text-text-secondary">{label}</p>
  </div>
);
