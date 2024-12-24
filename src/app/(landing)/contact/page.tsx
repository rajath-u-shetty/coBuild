"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form Submitted', formData);
  };

  const contactMethods = [
    {
      icon: <Mail className="h-8 w-8 text-black" />,
      title: 'Email',
      description: 'contact@radiatiant.com',
      link: 'mailto:contact@radiatiant.com',
    },
    {
      icon: <Phone className="h-8 w-8 text-black" />,
      title: 'Phone',
      description: '(555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: <MapPin className="h-8 w-8 text-black" />,
      title: 'Address',
      description: '123 Radiatiant Street, City, Country',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Contact Hero Section */}
      <section className="pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600">
              We're here to help and answer any questions you might have.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="border-gray-300">
                <CardHeader>
                  <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                    {method.icon}
                  </div>
                  <CardTitle className="text-black">{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    <Link href={method.link} className="text-gray-600 hover:text-black">
                      {method.description}
                    </Link>
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-gray-100 rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-black mb-2">
                    Full Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="border-gray-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-black mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="border-gray-300"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-black mb-2">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  className="border-gray-300"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-black mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write your message here"
                  rows={5}
                  className="border-gray-300"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-black hover:bg-gray-800 text-white flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" /> Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

