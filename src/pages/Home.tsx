import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, RefreshCw, Heart, Star, Sparkles, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ProductCard } from '../components/ui/ProductCard';
import { products, categories, getNewProducts } from '../data/products';

export const Home = () => {
  const newProducts = getNewProducts().slice(0, 4);
  const popularProducts = [...products].sort((a, b) => b.reviews - a.reviews).slice(0, 8);

  const features = [
    {
      icon: <Truck size={28} />,
      title: 'Livrare Gratuită',
      description: 'La comenzi peste 200 Lei',
    },
    {
      icon: <Shield size={28} />,
      title: 'Plăți Sigure',
      description: 'Criptare SSL 100%',
    },
    {
      icon: <RefreshCw size={28} />,
      title: 'Retururi Ușoare',
      description: '30 de zile pentru retur',
    },
    {
      icon: <Heart size={28} />,
      title: 'Calitate Premium',
      description: 'Materiale certificate',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center py-16 lg:py-0">
        {/* Background */}
        <div className="absolute inset-0 gradient-hero" />

        {/* Decorative blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] bg-secondary/10 rounded-full blur-3xl" />
          <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-[10%] left-[30%] w-[350px] h-[350px] bg-accent-blue/10 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm rounded-full text-primary font-semibold text-sm mb-8 shadow-soft"
              >
                <Sparkles size={18} />
                <span>Colecția Primăvară 2026</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-text-primary mb-8">
                Hăinuțe{' '}
                <span className="text-gradient">Adorabile</span>
                <br />
                pentru Prichindei
              </h1>

              <p className="text-lg lg:text-xl text-text-secondary mb-10 max-w-xl">
                Descoperă colecția noastră de haine pentru copii – rochițe de vis,
                tricouri cool și pantaloni confortabili. Calitate premium pentru
                fiecare aventură!
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Link to="/shop">
                  <Button size="lg" icon={<ArrowRight size={20} />} iconPosition="right">
                    Descoperă Colecția
                  </Button>
                </Link>
                <Link to="/shop?filter=sale">
                  <Button variant="outline" size="lg">
                    Vezi Reducerile
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-10 lg:gap-14">
                <div>
                  <p className="text-3xl lg:text-4xl font-bold text-primary mb-1">500+</p>
                  <p className="text-text-secondary">Produse</p>
                </div>
                <div>
                  <p className="text-3xl lg:text-4xl font-bold text-primary mb-1">10k+</p>
                  <p className="text-text-secondary">Clienți Fericiți</p>
                </div>
                <div className="flex items-start gap-2">
                  <Star size={28} className="text-warning fill-warning mt-1" />
                  <div>
                    <p className="text-3xl lg:text-4xl font-bold text-primary mb-1">4.9</p>
                    <p className="text-text-secondary">Rating</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative max-w-[480px] mx-auto lg:max-w-none">
                {/* Main Image */}
                <div className="relative z-10 rounded-[32px] overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&q=80"
                    alt="Copii fericiți"
                    className="w-full aspect-[4/5] object-cover"
                  />
                </div>

                {/* Floating Card - Top Right */}
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-4 -right-2 sm:top-8 sm:-right-6 bg-white rounded-2xl shadow-card p-4 lg:p-5 z-20"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-success/10 rounded-xl flex items-center justify-center">
                      <Truck className="text-success" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm lg:text-base text-text-primary">Livrare Rapidă</p>
                      <p className="text-xs lg:text-sm text-text-light">24-48 ore</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Card - Bottom Left */}
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-4 -left-2 sm:bottom-8 sm:-left-6 bg-white rounded-2xl shadow-card p-4 lg:p-5 z-20"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-secondary-dark border-2 border-white" />
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-dark border-2 border-white" />
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-blue to-accent-blue-dark border-2 border-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm lg:text-base text-text-primary">500+ Recenzii</p>
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} className="text-warning fill-warning" />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <section style={{ paddingTop: '100px', paddingBottom: '100px' }} className="bg-gradient-to-b from-white to-cream">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text-primary">
              De Ce Să Alegi MiniTrend?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: '40px' }}>
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex flex-col items-center text-center bg-white rounded-3xl shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2"
                style={{ padding: '40px 30px' }}
              >
                <div
                  className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center text-primary"
                  style={{ width: '90px', height: '90px', marginBottom: '30px' }}
                >
                  {feature.icon}
                </div>
                <h3 className="font-heading font-bold text-text-primary text-xl lg:text-2xl" style={{ marginBottom: '16px' }}>
                  {feature.title}
                </h3>
                <p className="text-base lg:text-lg text-text-secondary" style={{ lineHeight: '1.8' }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
            style={{ marginBottom: '80px' }}
          >
            <span
              className="inline-flex items-center bg-primary/10 rounded-full text-primary font-semibold text-sm uppercase tracking-widest"
              style={{ gap: '10px', padding: '14px 24px', marginBottom: '30px', display: 'inline-flex' }}
            >
              <Sparkles size={18} />
              Categorii
            </span>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-text-primary" style={{ marginBottom: '30px' }}>
              Explorează pe Categorii
            </h2>
            <p className="text-text-secondary text-lg lg:text-xl" style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
              Găsește hăinuțele perfecte pentru micuțul tău în categoriile noastre special concepute
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3" style={{ gap: '40px' }}>
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Link
                  to={`/shop/${category.id}`}
                  className="group relative block h-[450px] lg:h-[580px] rounded-[32px] overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-10 lg:p-14">
                    <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
                      {category.id === 'fete' ? '120+ Produse' : category.id === 'baieti' ? '100+ Produse' : '80+ Produse'}
                    </span>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-5">
                      {category.name}
                    </h3>
                    <p className="text-white/90 text-lg lg:text-xl mb-8 leading-relaxed">{category.description}</p>
                    <span className="inline-flex items-center gap-3 text-white font-semibold group-hover:gap-5 transition-all duration-300 text-lg bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                      Descoperă <ArrowRight size={22} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Products */}
      <section className="bg-white" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:items-end justify-between"
            style={{ gap: '40px', marginBottom: '60px' }}
          >
            <div>
              <span
                className="inline-flex items-center bg-secondary/10 rounded-full text-secondary font-semibold text-sm uppercase tracking-widest"
                style={{ gap: '10px', padding: '12px 20px', marginBottom: '20px', display: 'inline-flex' }}
              >
                <Sparkles size={16} />
                Proaspăt sosite
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-text-primary">
                Noutăți în Shop
              </h2>
            </div>
            <Link
              to="/shop?filter=new"
              className="inline-flex items-center text-primary font-semibold hover:bg-primary hover:text-white transition-all text-lg bg-primary/10 rounded-full"
              style={{ gap: '12px', padding: '16px 28px' }}
            >
              Vezi Toate Noutățile <ArrowRight size={22} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: '30px' }}>
            {newProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[32px] overflow-hidden"
          >
            <div className="absolute inset-0 gradient-primary" />
            <div className="relative z-10 grid lg:grid-cols-2 items-center">
              <div className="p-12 lg:p-24 text-white">
                <span className="inline-block px-6 py-3 bg-white/20 rounded-full text-sm font-semibold mb-10">
                  Ofertă Specială
                </span>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-8 leading-tight">
                  Până la 40% Reducere la Colecția de Sezon
                </h2>
                <p className="text-white/90 mb-12 text-lg lg:text-xl max-w-lg leading-relaxed">
                  Profită de reducerile noastre și îmbracă-ți micuțul cu hăinuțe de calitate la prețuri speciale!
                </p>
                <Link to="/shop?filter=sale">
                  <Button variant="secondary" size="lg" icon={<ArrowRight size={20} />} iconPosition="right">
                    Cumpără Acum
                  </Button>
                </Link>
              </div>
              <div className="hidden lg:block p-16">
                <img
                  src="https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=600&q=80"
                  alt="Ofertă specială"
                  className="w-full max-w-md ml-auto rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="bg-gradient-to-b from-cream to-white" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
            style={{ marginBottom: '80px' }}
          >
            <span
              className="inline-flex items-center bg-warning/10 rounded-full text-warning font-semibold text-sm uppercase tracking-widest"
              style={{ gap: '10px', padding: '14px 24px', marginBottom: '30px', display: 'inline-flex' }}
            >
              <Star size={18} className="fill-warning" />
              Cele mai populare
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary" style={{ marginBottom: '24px' }}>
              Favoritele Clienților
            </h2>
            <p className="text-text-secondary text-lg lg:text-xl" style={{ maxWidth: '700px', margin: '0 auto', lineHeight: '1.8' }}>
              Produsele cele mai apreciate de părinții din România
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: '30px' }}>
            {popularProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <Link to="/shop">
              <Button variant="outline" size="lg" className="px-12">
                Vezi Toate Produsele
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-6">De ce MiniTrend?</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-8">
                Calitate și Siguranță pentru Cei Mici
              </h2>
              <p className="text-text-secondary text-lg lg:text-xl mb-12 leading-relaxed">
                La MiniTrend, fiecare produs trece prin verificări riguroase de calitate.
                Folosim doar materiale certificate, sigure pentru pielea sensibilă a copiilor.
              </p>

              <div className="space-y-6">
                {[
                  'Materiale 100% naturale și certificate',
                  'Fără substanțe chimice dăunătoare',
                  'Testate dermatologic',
                  'Durabilitate garantată'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-5"
                  >
                    <CheckCircle className="text-success flex-shrink-0" size={28} />
                    <span className="text-text-primary font-medium text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>

              <Link to="/despre" className="inline-block mt-12">
                <Button variant="outline" size="lg">Află Mai Multe</Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=700&q=80"
                alt="Calitate MiniTrend"
                className="w-full rounded-3xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
            style={{ marginBottom: '80px' }}
          >
            <span
              className="inline-flex items-center bg-primary/10 rounded-full text-primary font-semibold text-sm uppercase tracking-widest"
              style={{ gap: '10px', padding: '14px 24px', marginBottom: '30px', display: 'inline-flex' }}
            >
              <Heart size={18} />
              Testimoniale
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary" style={{ marginBottom: '24px' }}>
              Ce Spun Părinții
            </h2>
            <p className="text-text-secondary text-lg lg:text-xl" style={{ maxWidth: '700px', margin: '0 auto', lineHeight: '1.8' }}>
              Peste 10,000 de familii fericite ne-au acordat încrederea lor
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3" style={{ gap: '40px' }}>
            {[
              {
                name: 'Maria P.',
                avatar: 'M',
                color: 'from-secondary to-secondary-dark',
                rating: 5,
                text: 'Calitatea hainelor este extraordinară! Fetița mea adoră rochia cu fluturi. Cu siguranță vom comanda din nou!',
                location: 'București'
              },
              {
                name: 'Andrei D.',
                avatar: 'A',
                color: 'from-primary to-primary-dark',
                rating: 5,
                text: 'Livrare rapidă și ambalaj foarte frumos. Tricourile pentru băiatul meu sunt exact cum apar în poze. Super!',
                location: 'Cluj-Napoca'
              },
              {
                name: 'Elena M.',
                avatar: 'E',
                color: 'from-accent-blue to-accent-blue-dark',
                rating: 5,
                text: 'Materialele sunt foarte moi și plăcute la atingere. Perfect pentru pielea sensibilă a bebelușilor!',
                location: 'Timișoara'
              },
            ].map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-gradient-to-br from-cream to-white rounded-[32px] shadow-card hover:shadow-hover transition-all duration-300"
                style={{ padding: '50px 40px' }}
              >
                <div className="flex items-center" style={{ gap: '8px', marginBottom: '30px' }}>
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={26} className="text-warning fill-warning" />
                  ))}
                </div>
                <p className="text-text-secondary text-lg lg:text-xl italic" style={{ marginBottom: '40px', lineHeight: '1.8' }}>
                  "{review.text}"
                </p>
                <div className="flex items-center" style={{ gap: '20px' }}>
                  <div
                    className={`rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center text-white font-bold text-2xl shadow-lg`}
                    style={{ width: '70px', height: '70px' }}
                  >
                    {review.avatar}
                  </div>
                  <div>
                    <span className="font-bold text-text-primary text-xl block" style={{ marginBottom: '4px' }}>{review.name}</span>
                    <span className="text-text-light text-base">{review.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
