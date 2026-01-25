import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { Container } from '../components/common';
import { Button } from '../components/ui';
import { fadeInUp } from '../config/motion';

export const NotFound = () => {
  return (
    <Container className="py-16 md:py-24">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="text-center max-w-lg mx-auto"
      >
        {/* 404 Number */}
        <div className="mb-8">
          <span className="text-8xl md:text-9xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            404
          </span>
        </div>

        {/* Message */}
        <h1 className="font-heading text-2xl md:text-3xl font-bold text-text-primary mb-4">
          Pagina nu a fost găsită
        </h1>
        <p className="text-text-secondary mb-8">
          Ne pare rău, dar pagina pe care o cauți nu există sau a fost mutată.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button icon={<Home size={18} />}>
              Acasă
            </Button>
          </Link>
          <Button
            variant="outline"
            onClick={() => window.history.back()}
            icon={<ArrowLeft size={18} />}
          >
            Înapoi
          </Button>
        </div>
      </motion.div>
    </Container>
  );
};
