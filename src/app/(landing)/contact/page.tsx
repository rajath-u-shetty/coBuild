'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
    // Add your form submission logic here
  };

  const handleAddressClick = (address: string) => {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  const contactMethods = [
    {
      icon: <Mail className="h-8 w-8 text-primary" />,
      title: 'Email',
      description: 'contact@radiatiant.com',
      link: 'mailto:contact@radiatiant.com',
      action: (description: string) => window.location.href = `mailto:${description}`,
    },
    {
      icon: <Phone className="h-8 w-8 text-primary" />,
      title: 'Phone',
      description: '+91 7406988827',
      link: 'tel:+917406988827',
      action: (description: string) => window.location.href = `tel:${description.replace(/\s/g, '')}`,
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: 'Address',
      description: '137/A, BBMP khata No. 4096/137/A, 30th Main, Sector-2, HSR Layout, HSR Police Station, Bangalore South, Bangalore-560012, Karnataka, India',
      link: '#',
      action: (description: string) => handleAddressClick(description),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900">
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-6 text-primary">Get in Touch</h1>
            <p className="text-xl text-gray-600">
              We're here to help and answer any questions you might have. We look forward to hearing from you!
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  className="border-none shadow-lg hover:shadow-xl transition-shadow cursor-pointer bg-gradient-to-br from-gray-50 to-gray-100"
                  onClick={() => method.action(method.description)}
                >
                  <CardHeader>
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                      {method.icon}
                    </div>
                    <CardTitle className="text-2xl font-semibold text-primary text-center">{method.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 hover:text-primary transition-colors text-center">
                      {method.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-2xl"
          >
            <h2 className="text-3xl font-bold text-center mb-8 text-primary">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="border-gray-300 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="border-gray-300 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  className="border-gray-300 focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write your message here"
                  rows={5}
                  className="border-gray-300 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white flex items-center justify-center gap-2 py-6 text-lg font-semibold rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Send Message <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;



