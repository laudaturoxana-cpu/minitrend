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
      icon: <Truck size={24} />,
      title: 'Livrare Gratuită',
      description: 'La comenzi peste 200 Lei',
    },
    {
      icon: <Shield size={24} />,
      title: 'Plăți Sigure',
      description: 'Criptare SSL 100%',
    },
    {
      icon: <RefreshCw size={24} />,
      title: 'Retururi Ușoare',
      description: '30 de zile pentru retur',
    },
    {
      icon: <Heart size={24} />,
      title: 'Calitate Premium',
      description: 'Materiale certificate',
    },
  ];

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[600px] lg:min-h-[calc(100vh-80px)] flex items-center py-20 md:py-24 lg:py-28">
        {/* Background */}
        <div className="absolute inset-0 gradient-hero" />

        {/* Decorative blobs - hidden on mobile */}
        <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[5%] w-[200px] lg:w-[300px] h-[200px] lg:h-[300px] bg-secondary/10 rounded-full blur-3xl" />
          <div className="absolute top-[20%] right-[10%] w-[250px] lg:w-[400px] h-[250px] lg:h-[400px] bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 px-5 md:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 text-center lg:text-left section-head"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-primary font-semibold text-xs md:text-sm"
              >
                <Sparkles size={16} />
                <span>Colecția Primăvară 2026</span>
              </motion.div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-text-primary leading-tight">
                Hăinuțe{' '}
                <span className="text-gradient">Adorabile</span>
                <br />
                pentru Prichindei
              </h1>

              <p className="text-base md:text-lg text-text-secondary max-w-xl mx-auto lg:mx-0">
                Descoperă colecția noastră de haine pentru copii – rochițe de vis,
                tricouri cool și pantaloni confortabili.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/shop">
                  <Button size="lg" icon={<ArrowRight size={18} />} iconPosition="right" className="w-full sm:w-auto">
                    Descoperă Colecția
                  </Button>
                </Link>
                <Link to="/shop?filter=sale">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Vezi Reducerile
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-10 pt-4">
                <div className="text-center lg:text-left">
                  <p className="text-2xl md:text-3xl font-bold text-primary">500+</p>
                  <p className="text-text-secondary text-sm">Produse</p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-2xl md:text-3xl font-bold text-primary">10k+</p>
                  <p className="text-text-secondary text-sm">Clienți Fericiți</p>
                </div>
                <div className="flex items-center gap-2">
                  <Star size={24} className="text-warning fill-warning" />
                  <div className="text-center lg:text-left">
                    <p className="text-2xl md:text-3xl font-bold text-primary">4.9</p>
                    <p className="text-text-secondary text-sm">Rating</p>
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
              <div className="relative max-w-[350px] md:max-w-[420px] mx-auto lg:max-w-none">
                {/* Main Image */}
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&q=80"
                    alt="Copii fericiți"
                    className="w-full aspect-[4/5] object-cover"
                  />
                </div>

                {/* Floating Card - Top Right - hidden on small mobile */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="hidden sm:block absolute top-4 -right-2 md:top-6 md:-right-4 bg-white rounded-xl shadow-lg p-3 md:p-4 z-20"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                      <Truck className="text-success" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-text-primary">Livrare Rapidă</p>
                      <p className="text-xs text-text-light">24-48 ore</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Card - Bottom Left - hidden on small mobile */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="hidden sm:block absolute bottom-4 -left-2 md:bottom-6 md:-left-4 bg-white rounded-xl shadow-lg p-3 md:p-4 z-20"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary to-secondary-dark border-2 border-white" />
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-dark border-2 border-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-text-primary">500+ Recenzii</p>
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={12} className="text-warning fill-warning" />
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
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-cream">
        <div className="container px-5 md:px-6">
          <div className="text-center mb-16 md:mb-20 section-head">
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary">
              De Ce Să Alegi MiniTrend?
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center bg-white rounded-2xl shadow-card p-5 md:p-6 lg:p-8"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-heading font-bold text-text-primary text-sm md:text-base lg:text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="container px-5 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20 lg:mb-24 section-head"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-xs uppercase tracking-wider mb-5">
              <Sparkles size={14} />
              Categorii
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-text-primary mb-5">
              Explorează pe Categorii
            </h2>
            <p className="text-text-secondary text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
              Găsește hăinuțele perfecte pentru micuțul tău în categoriile noastre
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Link
                  to={`/shop/${category.id}`}
                  className="group relative block h-[320px] md:h-[380px] lg:h-[450px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10 text-center flex flex-col items-center">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium mb-3">
                      {category.id === 'fete' ? '120+ Produse' : category.id === 'baieti' ? '100+ Produse' : '80+ Produse'}
                    </span>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
                      {category.name}
                    </h3>
                    <p className="text-white/80 text-sm md:text-base mb-4 line-clamp-2">
                      {category.description}
                    </p>
                    <span className="inline-flex items-center justify-center gap-2 text-white font-medium text-sm bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                      Descoperă <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Products */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container px-5 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-16 md:mb-20"
          >
            <div className="section-head">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full text-secondary font-semibold text-xs uppercase tracking-wider mb-5">
                <Sparkles size={14} />
                Proaspăt sosite
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary">
                Noutăți în Shop
              </h2>
            </div>
            <Link
              to="/shop?filter=new"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:bg-primary hover:text-white transition-all text-sm bg-primary/10 rounded-full px-5 py-3"
            >
              Vezi Toate <ArrowRight size={18} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 items-start">
            {newProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="container px-5 md:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl lg:rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 gradient-primary" />
            <div className="relative z-10 grid lg:grid-cols-2 items-center">
              <div className="p-8 md:p-12 lg:p-16 text-white">
                <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-6">
                  Ofertă Specială
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                  Până la 40% Reducere la Colecția de Sezon
                </h2>
                <p className="text-white/90 mb-8 text-sm md:text-base lg:text-lg max-w-lg">
                  Profită de reducerile noastre și îmbracă-ți micuțul cu hăinuțe de calitate!
                </p>
                <Link to="/shop?filter=sale">
                  <Button variant="secondary" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
                    Cumpără Acum
                  </Button>
                </Link>
              </div>
              <div className="hidden lg:block p-12">
                <img
                  src="https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&q=80"
                  alt="Ofertă specială"
                  className="w-full max-w-sm ml-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-cream to-white">
        <div className="container px-5 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20 section-head"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-warning/10 rounded-full text-warning font-semibold text-xs uppercase tracking-wider mb-5">
              <Star size={14} className="fill-warning" />
              Cele mai populare
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Favoritele Clienților
            </h2>
            <p className="text-text-secondary text-sm md:text-base lg:text-lg max-w-xl mx-auto">
              Produsele cele mai apreciate de părinții din România
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 items-start">
            {popularProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-14"
          >
            <Link to="/shop">
              <Button variant="outline" size="lg">
                Vezi Toate Produsele
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="container px-5 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-primary font-semibold text-xs uppercase tracking-wider mb-5">De ce MiniTrend?</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-6">
                Calitate și Siguranță pentru Cei Mici
              </h2>
              <p className="text-text-secondary text-sm md:text-base lg:text-lg mb-10">
                La MiniTrend, fiecare produs trece prin verificări riguroase de calitate.
                Folosim doar materiale certificate, sigure pentru pielea sensibilă a copiilor.
              </p>

              <div className="space-y-5">
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
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="text-success flex-shrink-0" size={22} />
                    <span className="text-text-primary font-medium text-sm md:text-base">{item}</span>
                  </motion.div>
                ))}
              </div>

              <Link to="/despre" className="inline-block mt-8">
                <Button variant="outline" size="lg">Află Mai Multe</Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=700&q=80"
                alt="Calitate MiniTrend"
                className="w-full rounded-2xl lg:rounded-3xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container px-5 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20 section-head"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-xs uppercase tracking-wider mb-5">
              <Heart size={14} />
              Testimoniale
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-5">
              Ce Spun Părinții
            </h2>
            <p className="text-text-secondary text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto">
              Peste 10,000 de familii fericite ne-au acordat încrederea lor
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
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
                text: 'Livrare rapidă și ambalaj foarte frumos. Tricourile pentru băiatul meu sunt exact cum apar în poze.',
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-cream to-white rounded-2xl shadow-card p-6 md:p-8"
              >
                <div className="flex items-center gap-1.5 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={22} className="text-warning fill-warning" />
                  ))}
                </div>
                <p className="text-text-secondary text-base md:text-lg lg:text-xl italic mb-8 leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center text-white font-bold text-xl`}
                  >
                    {review.avatar}
                  </div>
                  <div>
                    <span className="font-bold text-text-primary text-base md:text-lg block">{review.name}</span>
                    <span className="text-text-light text-sm md:text-base">{review.location}</span>
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
