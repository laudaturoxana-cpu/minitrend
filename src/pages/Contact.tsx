import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone size={28} />,
      title: 'Telefon',
      details: ['+40 721 234 567', 'Luni - Vineri: 9:00 - 18:00'],
    },
    {
      icon: <Mail size={28} />,
      title: 'Email',
      details: ['contact@minitrend.ro', 'Răspundem în 24h'],
    },
    {
      icon: <MapPin size={28} />,
      title: 'Adresă',
      details: ['Str. Exemplu nr. 123', 'București, România'],
    },
    {
      icon: <Clock size={28} />,
      title: 'Program',
      details: ['Luni - Vineri: 9:00 - 18:00', 'Weekend: 10:00 - 14:00'],
    },
  ];

  return (
    <div className="min-h-screen space-y-20 md:space-y-24 lg:space-y-28">
      {/* Hero */}
      <section className="relative h-[350px] lg:h-[400px] bg-gradient-to-r from-primary to-primary-dark flex items-center">
        <div className="container text-center text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Contactează-ne
            </h1>
            <p className="text-white/90 max-w-2xl mx-auto text-lg lg:text-xl leading-relaxed">
              Suntem aici să te ajutăm! Scrie-ne și îți vom răspunde în cel mai scurt timp.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 -mt-20 relative z-10">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-card p-8 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  {info.icon}
                </div>
                <h3 className="font-heading font-bold text-lg mb-4">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-text-secondary text-base leading-relaxed">
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-10">
                <MessageCircle size={32} className="text-primary" />
                <h2 className="font-heading text-2xl lg:text-3xl font-bold">Trimite un mesaj</h2>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-success/10 text-success p-12 rounded-3xl text-center"
                >
                  <div className="w-20 h-20 mx-auto mb-6 bg-success/20 rounded-full flex items-center justify-center">
                    <Send size={36} />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold mb-4">Mesaj trimis!</h3>
                  <p className="text-lg">Îți mulțumim! Te vom contacta în curând.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-base font-medium mb-3">Numele tău</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-5 py-4 bg-white rounded-xl border-2 border-gray-100 focus:border-primary outline-none transition-colors text-base"
                        placeholder="Ion Popescu"
                      />
                    </div>
                    <div>
                      <label className="block text-base font-medium mb-3">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-5 py-4 bg-white rounded-xl border-2 border-gray-100 focus:border-primary outline-none transition-colors text-base"
                        placeholder="email@exemplu.ro"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-base font-medium mb-3">Subiect</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-5 py-4 bg-white rounded-xl border-2 border-gray-100 focus:border-primary outline-none transition-colors text-base"
                      placeholder="Despre ce este vorba?"
                    />
                  </div>

                  <div>
                    <label className="block text-base font-medium mb-3">Mesaj</label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-5 py-4 bg-white rounded-xl border-2 border-gray-100 focus:border-primary outline-none transition-colors resize-none text-base"
                      placeholder="Scrie mesajul tău aici..."
                    />
                  </div>

                  <Button type="submit" size="lg" icon={<Send size={20} />} iconPosition="right">
                    Trimite Mesajul
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-card h-[500px] lg:h-auto"
            >
              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                <div className="text-center p-12">
                  <MapPin size={56} className="mx-auto mb-6 text-primary" />
                  <h3 className="font-heading text-2xl font-semibold mb-4">Locația Noastră</h3>
                  <p className="text-text-secondary text-lg leading-relaxed">
                    Str. Exemplu nr. 123<br />
                    București, Sector 1<br />
                    România
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container text-center">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            Ai întrebări frecvente?
          </h2>
          <p className="text-text-secondary mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            Verifică pagina noastră de întrebări frecvente pentru răspunsuri rapide la cele mai comune întrebări.
          </p>
          <Button variant="outline" size="lg">Vezi FAQ</Button>
        </div>
      </section>
    </div>
  );
};
