import React from 'react';
import { Check, Star } from 'lucide-react';
import MaxWidthWrapper from './MaxWidthWrapper';

const HeroSection = () => {
  return (
    <section>
      <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-8 lg:pt-24 xl:pt-32 lg:pb-52">
        <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
          <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="absolute w-28 left-0 -top-20 hidden lg:block">
              <img src="https://utfs.io/f/9iW76r34sJuYlBTjtZ8tIOvJ6Ux4DcP0Zw1KaQY2N8LpnyAS" alt="accent-image" className="w-full" />
            </div>
            <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
              Find Your Dream <span className="bg-amber-600 px-2 text-white">Home</span> Today
            </h1>
            <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
              Discover exclusive properties with our <span className="font-semibold">premium</span> real estate platform. Expert guidance and seamless transactions at every step.
            </p>
            <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
              <div className="space-y-2">
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-amber-600" />
                  Premium Property Portfolio
                </li>
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-amber-600" />
                  Expert Real Estate Advisors
                </li>
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-amber-600" />
                  Secure Investment Process
                </li>
              </div>
            </ul>
            <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <div className="flex -space-x-4">
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-amber-100"
                  src="users/user-1.png"
                  alt="satisfied-investor-1"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-amber-100"
                  src="users/user-2.png"
                  alt="satisfied-investor-2"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-amber-100"
                  src="users/user-3.png"
                  alt="satisfied-investor-3"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-amber-100"
                  src="users/user-3.png"
                  alt="satisfied-investor-4"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-amber-100"
                  src="users/user-3.png"
                  alt="satisfied-investor-5"
                />
              </div>
              <div className="flex flex-col justify-between items-center sm:items-start">
                <div className="flex gap-0.5">
                  <Star className="h-4 w-4 text-amber-600 fill-amber-600" />
                  <Star className="h-4 w-4 text-amber-600 fill-amber-600" />
                  <Star className="h-4 w-4 text-amber-600 fill-amber-600" />
                  <Star className="h-4 w-4 text-amber-600 fill-amber-600" />
                  <Star className="h-4 w-4 text-amber-600 fill-amber-600" />
                </div>
                <p><span className="font-semibold">2500+</span> successful investments</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-32 h-fit">
          <div className="relative md:max-w-xl">
            <img
              src="/line.png"
              className="absolute w-20 -left-6 -bottom-6 select-none"
              alt="decorative-line"
            />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://utfs.io/f/9iW76r34sJuY6PBJ8jdnu5YhoHNermSzsXlBPcfnyx1MJbLE"
                alt="Luxury Property"
                className="w-64 h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-semibold">Luxury Beachfront Villa</p>
                <p className="text-amber-300">Starting at $500,000</p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default HeroSection;

