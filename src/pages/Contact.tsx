import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container, SectionHeader } from '../components/common';
import { Breadcrumb, Button, Input } from '../components/ui';
import { cn } from '../utils';
import { fadeInUp, staggerContainer, staggerItem } from '../config/motion';

const contactInfo = [
  {
    icon: <MapPin size={24} />,
    title: 'Adresă',
    content: ['Str. Exemplu nr. 123', 'București, România'],
  },
  {
    icon: <Phone size={24} />,
    title: 'Telefon',
    content: ['+40 721 234 567', '+40 31 234 5678'],
  },
  {
    icon: <Mail size={24} />,
    title: 'Email',
    content: ['contact@minitrend.ro', 'suport@minitrend.ro'],
  },
  {
    icon: <Clock size={24} />,
    title: 'Program',
    content: ['Luni - Vineri: 9:00 - 18:00', 'Sâmbătă: 10:00 - 14:00'],
  },
];

export const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  const breadcrumbItems = [
    { label: 'Acasă', href: '/' },
    { label: 'Contact' },
  ];

  return (
    <Container className="py-8 md:py-12">
      <Breadcrumb items={breadcrumbItems} className="mb-8" />

      <SectionHeader
        title="Contactează-ne"
        subtitle="Suntem aici să te ajutăm cu orice întrebare"
      />

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-2xl p-6 md:p-8 shadow-soft"
        >
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send size={32} className="text-success" />
              </div>
              <h3 className="font-heading text-xl font-bold text-text-primary mb-2">
                Mesaj trimis cu succes!
              </h3>
              <p className="text-text-secondary mb-6">
                Îți vom răspunde în cel mai scurt timp posibil.
              </p>
              <Button onClick={() => setIsSubmitted(false)}>
                Trimite alt mesaj
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Input
                  label="Nume complet"
                  placeholder="Ion Popescu"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  required
                />
                <Input
                  label="Email"
                  type="email"
                  placeholder="ion@email.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  required
                />
              </div>

              <Input
                label="Subiect"
                placeholder="Cum te putem ajuta?"
                value={formState.subject}
                onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                required
              />

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Mesaj
                </label>
                <textarea
                  placeholder="Scrie mesajul tău aici..."
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  required
                  className={cn(
                    'w-full px-4 py-3 rounded-xl border border-gray-200 bg-white',
                    'placeholder:text-text-light resize-none',
                    'focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary'
                  )}
                />
              </div>

              <Button
                type="submit"
                fullWidth
                loading={isSubmitting}
                icon={<Send size={18} />}
              >
                Trimite mesajul
              </Button>
            </form>
          )}
        </motion.div>

        {/* Contact Info */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {contactInfo.map((info) => (
            <motion.div
              key={info.title}
              variants={staggerItem}
              className="flex gap-4"
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                {info.icon}
              </div>
              <div>
                <h3 className="font-medium text-text-primary mb-1">{info.title}</h3>
                {info.content.map((line, i) => (
                  <p key={i} className="text-text-secondary text-sm">
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Map placeholder */}
          <div className="mt-8 rounded-2xl overflow-hidden h-64 bg-gray-100 flex items-center justify-center">
            <p className="text-text-secondary">Hartă interactivă</p>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};
