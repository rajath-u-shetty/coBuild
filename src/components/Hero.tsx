'use client'

import React from 'react';
import { Star, ArrowRight, Building2, Users, Wallet } from 'lucide-react';
import { motion } from 'framer-motion';
import MaxWidthWrapper from './MaxwidthWrapper';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const features = [
  {
    icon: Building2,
    title: 'Premium Property Portfolio',
    description: 'Curated selection of high-value properties'
  },
  {
    icon: Users,
    title: 'Expert Real Estate Advisors',
    description: 'Professional guidance at every step'
  },
  {
    icon: Wallet,
    title: 'Secure Investment Process',
    description: 'Safe and transparent transactions'
  }
];

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* Updated background with smooth transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-100 via-red-50/50 to-white transition-colors duration-1000 ease-in-out" />

      {/* Enhanced decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-br from-red-100/40 via-white/20 to-transparent" />
      <div className="absolute -top-40 right-0 w-96 h-96 bg-red-100/50 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-red-50/50 rounded-full blur-3xl opacity-30 animate-pulse" />

      <MaxWidthWrapper className="relative pt-24 pb-32 lg:grid lg:grid-cols-2 lg:gap-x-12 lg:pt-32 xl:pt-36 lg:pb-40">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="px-6 lg:px-0 lg:pt-4"
        >
          <div className="relative mx-auto lg:mx-0 flex flex-col items-center lg:items-start">
            <motion.div variants={itemVariants} className="mb-8">
              <Badge variant="outline" className="px-4 py-2 border-red-200 bg-white/50 backdrop-blur-sm">
                <span className="text-red-600 font-semibold">New Properties Available</span>
              </Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="relative text-balance font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl text-center lg:text-left"
            >
              Transforming{' '}
              <span className="relative">
                <span className="relative z-10 bg-red-600 px-4 text-white rounded-md">
                  Real Estate
                </span>
                <div className="absolute inset-0 bg-red-200/30 blur-2xl" />
              </span>{' '}
              Through Collaboration
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-8 text-red-600 font-semibold text-lg text-center lg:text-left"
            >
              &quot;Building a Collaborative Ecosystem in Real Estate for Sustainable Growth and Maximum Value.&quot;
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance text-gray-600"
            >
              Unite, invest, and thrive in a platform designed to empower communities and property owners.
              Discover exclusive properties with our premium real estate platform.
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="mt-12 grid gap-4 w-full max-w-lg"
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-red-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-2 rounded-lg bg-red-50">
                    <feature.icon className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="mt-12 flex flex-col sm:flex-row items-center gap-8"
            >
              <div className="flex -space-x-4">
                {[1, 2, 3, 4, 5].map((num) => (
                  <motion.img
                    key={num}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    className="inline-block h-12 w-12 rounded-full ring-4 ring-white"
                    src="/api/placeholder/48/48"
                    alt={`investor-${num}`}
                  />
                ))}
              </div>
              <div className="flex flex-col items-center sm:items-start gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-red-600 fill-red-600" />
                  ))}
                </div>
                <p className="text-gray-700">
                  Trusted by <span className="font-semibold text-gray-900">2500+</span> investors
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-12">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Explore Properties
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative mt-16 lg:mt-0 px-6 lg:px-0"
        >
          <div className="grid grid-cols-12 grid-rows-6 gap-4 h-[600px]">
            <div className="col-span-12 row-span-4 relative rounded-2xl overflow-hidden shadow-2xl group">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                src="https://utfs.io/f/9iW76r34sJuYXbG2kqNZneKOpYWQ5TB21cDhkb3UHGagq9md"
                alt="Luxury Property"
                className="w-full h-full object-cover transition-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-white font-semibold text-xl">Luxury Beachfront Villa</h3>
                  <p className="text-amber-300">Premium Investment Opportunity</p>
                </div>
              </div>
            </div>

            {[
              { title: 'Commercial Spaces', subtitle: 'High-yield investments' },
              { title: 'Community Living', subtitle: 'Modern Lifestyle' }
            ].map((item, index) => (
              <div
                key={index}
                className="col-span-6 row-span-2 relative rounded-2xl overflow-hidden shadow-xl group"
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src="https://utfs.io/f/9iW76r34sJuY6PBJ8jdnu5YhoHNermSzsXlBPcfnyx1MJbLE"
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 p-4">
                    <h3 className="text-white font-semibold">{item.title}</h3>
                    <p className="text-amber-300 text-sm">{item.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-red-100 rounded-full blur-3xl opacity-50" />
          <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-gradient-to-br from-red-200 to-red-100 rounded-full blur-2xl opacity-80" />
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
};

export default HeroSection;

