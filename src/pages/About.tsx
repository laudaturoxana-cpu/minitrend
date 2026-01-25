import { motion } from 'framer-motion';
import { Heart, Award, Users, Sparkles } from 'lucide-react';
import { Container, SectionHeader } from '../components/common';
import { Breadcrumb } from '../components/ui';
import { fadeInUp, staggerContainer, staggerItem } from '../config/motion';

const stats = [
  { icon: <Users size={28} />, value: '10,000+', label: 'Clienți fericiți' },
  { icon: <Heart size={28} />, value: '500+', label: 'Produse unice' },
  { icon: <Award size={28} />, value: '5', label: 'Ani experiență' },
  { icon: <Sparkles size={28} />, value: '4.9', label: 'Rating mediu' },
];

const values = [
  {
    title: 'Calitate',
    description: 'Selectăm doar cele mai bune materiale, delicate cu pielea sensibilă a copiilor.',
  },
  {
    title: 'Design',
    description: 'Modele originale create de designeri români, inspirate din tendințele internaționale.',
  },
  {
    title: 'Sustenabilitate',
    description: 'Ne angajăm să folosim materiale eco-friendly și procese de producție responsabile.',
  },
  {
    title: 'Comunitate',
    description: 'Construim o comunitate de părinți care împărtășesc aceleași valori.',
  },
];

export const About = () => {
  const breadcrumbItems = [
    { label: 'Acasă', href: '/' },
    { label: 'Despre noi' },
  ];

  return (
    <Container className="py-8 md:py-12">
      <Breadcrumb items={breadcrumbItems} className="mb-8" />

      {/* Hero Section */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="text-center mb-16 md:mb-24"
      >
        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
          Povestea{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            MiniTrend
          </span>
        </h1>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Am pornit în 2021 cu o misiune simplă: să oferim părinților din România
          haine de calitate pentru cei mici, la prețuri accesibile.
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 md:mb-24"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={staggerItem}
            className="text-center p-6 bg-white rounded-2xl shadow-soft"
          >
            <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
              {stat.icon}
            </div>
            <p className="font-heading text-2xl md:text-3xl font-bold text-primary mb-1">
              {stat.value}
            </p>
            <p className="text-text-secondary text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Our Story */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-primary mb-6">
            Misiunea noastră
          </h2>
          <div className="space-y-4 text-text-secondary">
            <p>
              MiniTrend a luat naștere din dorința de a oferi copiilor din România
              haine care să combine confortul cu stilul, fără compromisuri la calitate.
            </p>
            <p>
              Fiecare articol din colecția noastră este creat cu grijă, folosind
              materiale premium care sunt delicate cu pielea sensibilă a celor mici.
            </p>
            <p>
              Credem că fiecare copil merită să se simtă special și confortabil,
              iar părinții merită să aibă acces la produse de calitate la prețuri corecte.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative aspect-[4/3] rounded-2xl overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=600&h=450&fit=crop"
            alt="Copii fericiți în haine MiniTrend"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Values */}
      <SectionHeader
        title="Valorile noastre"
        subtitle="Principiile care ne ghidează în tot ceea ce facem"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {values.map((value) => (
          <motion.div
            key={value.title}
            variants={staggerItem}
            className="p-6 bg-cream/50 rounded-2xl"
          >
            <h3 className="font-heading font-bold text-text-primary text-lg mb-2">
              {value.title}
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              {value.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
};
