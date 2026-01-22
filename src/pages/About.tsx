import { motion } from 'framer-motion';
import { Heart, Award, Leaf, Users, Star, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const About = () => {
  const values = [
    {
      icon: <Heart size={36} />,
      title: 'Cu Dragoste',
      description: 'Fiecare produs este ales cu grijă și dragoste pentru micuții noștri clienți.',
    },
    {
      icon: <Leaf size={36} />,
      title: 'Sustenabil',
      description: 'Folosim materiale eco-friendly și susținem practicile responsabile.',
    },
    {
      icon: <Award size={36} />,
      title: 'Calitate Premium',
      description: 'Selectăm doar cele mai bune materiale, blânde cu pielea sensibilă.',
    },
    {
      icon: <Users size={36} />,
      title: 'Comunitate',
      description: 'Suntem o familie de părinți care înțeleg nevoile altor părinți.',
    },
  ];

  const stats = [
    { number: '10,000+', label: 'Clienți Fericiți' },
    { number: '500+', label: 'Produse' },
    { number: '4.9', label: 'Rating Mediu', icon: <Star size={24} className="fill-warning text-warning" /> },
    { number: '5+', label: 'Ani de Experiență' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-3 px-5 py-3 bg-primary/10 rounded-full text-primary font-medium text-sm mb-8">
                <Sparkles size={18} />
                Povestea Noastră
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-8 leading-tight">
                Creăm{' '}
                <span className="text-gradient">Amintiri Frumoase</span>{' '}
                pentru Copilărie
              </h1>
              <p className="text-lg lg:text-xl text-text-secondary mb-10 leading-relaxed">
                La MiniTrend, credem că fiecare copil merită să se simtă special.
                De aceea, am creat un loc unde părinții pot găsi hăinuțe de calitate
                superioară, confortabile și la modă pentru micuții lor.
              </p>
              <Link to="/shop">
                <Button size="lg">Descoperă Colecția</Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=600&q=80"
                alt="Copii fericiți"
                className="rounded-3xl shadow-2xl"
              />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-card p-5"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Heart className="text-secondary" size={28} />
                  </div>
                  <div>
                    <p className="font-bold text-xl">10k+</p>
                    <p className="text-sm text-text-light">Familii Fericite</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-3 mb-3">
                  <p className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
                    {stat.number}
                  </p>
                  {stat.icon}
                </div>
                <p className="text-text-secondary text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-10">
                Cum a Început Totul
              </h2>
              <p className="text-text-secondary text-lg lg:text-xl mb-8 leading-relaxed">
                MiniTrend s-a născut din dorința unei mame de a găsi haine de calitate
                pentru copilul ei. După ore întregi de căutări și dezamăgiri, am decis
                să creăm ceea ce nu am găsit - un magazin care pune pe primul loc
                confortul și siguranța copiilor.
              </p>
              <p className="text-text-secondary text-lg lg:text-xl mb-8 leading-relaxed">
                Astăzi, suntem mândri să servim mii de familii din România, oferindu-le
                hăinuțe adorabile, din materiale sigure și certificate, la prețuri
                accesibile.
              </p>
              <p className="text-text-secondary text-lg lg:text-xl leading-relaxed">
                Fiecare articol din colecția noastră este testat și aprobat de echipa
                noastră de părinți - pentru că înțelegem ce contează cu adevărat.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 lg:mb-20"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Valorile Noastre
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg lg:text-xl leading-relaxed">
              Acestea sunt principiile care ne ghidează în tot ceea ce facem
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-cream p-10 rounded-3xl text-center hover:shadow-card transition-shadow"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  {value.icon}
                </div>
                <h3 className="font-heading font-bold text-xl mb-4">{value.title}</h3>
                <p className="text-text-secondary text-base leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 lg:mb-20"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Echipa Noastră
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg lg:text-xl leading-relaxed">
              Suntem o echipă mică dar dedicată, formată din părinți pasionați
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 lg:gap-16 max-w-5xl mx-auto">
            {[
              { name: 'Maria Ionescu', role: 'Fondator & CEO', initials: 'MI' },
              { name: 'Andrei Popa', role: 'Director Creativ', initials: 'AP' },
              { name: 'Elena Marin', role: 'Customer Care', initials: 'EM' },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-36 h-36 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-4xl font-bold">
                  {member.initials}
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">{member.name}</h3>
                <p className="text-text-secondary text-base">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-primary to-primary-dark">
        <div className="container text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Hai să Facem Copilăria Mai Frumoasă!
            </h2>
            <p className="text-white/90 mb-12 max-w-2xl mx-auto text-lg lg:text-xl leading-relaxed">
              Descoperă colecția noastră de hăinuțe adorabile și oferă-i copilului tău
              confortul pe care îl merită.
            </p>
            <div className="flex flex-wrap gap-5 justify-center">
              <Link to="/shop">
                <Button variant="secondary" size="lg">
                  Descoperă Produsele
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                  Contactează-ne
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
