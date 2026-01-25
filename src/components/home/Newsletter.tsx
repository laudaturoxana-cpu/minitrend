import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from '../ui';
import { fadeInUp } from '../../config/motion';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-primary via-primary-dark to-primary">
      <div className="container px-4 sm:px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="w-full flex justify-center">
            <div className="flex flex-col items-center text-center max-w-xl">
              <span className="inline-block px-4 py-1.5 bg-white/20 rounded-full text-white text-xs font-semibold mb-4">
                Newsletter
              </span>

              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 text-center w-full">
                Fii la curent cu noutățile!
              </h2>

              <p className="text-white/90 mb-8 text-sm md:text-base text-center w-full">
                Abonează-te și primești 10% reducere la prima comandă
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <CheckCircle size={32} className="text-white" />
                  </div>
                  <p className="text-white font-medium text-center">Mulțumim pentru abonare!</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-white/80 hover:text-white text-sm underline"
                  >
                    Abonează altă adresă
                  </button>
                </motion.div>
              ) : (
                <div className="flex flex-col items-center gap-4 w-full max-w-xs">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Adresa ta de email"
                    required
                    className="w-full px-5 py-3.5 rounded-xl text-text-primary text-sm text-center outline-none focus:ring-2 focus:ring-white/30"
                  />
                  <Button
                    type="submit"
                    variant="secondary"
                    icon={<Send size={18} />}
                    onClick={handleSubmit}
                  >
                    Abonare
                  </Button>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
