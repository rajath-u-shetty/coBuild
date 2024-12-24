'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const listings = [
  { id: 1, title: 'Luxury Villa', image: 'https://utfs.io/f/9iW76r34sJuYOnr5vXmj59EMNWpJC3r6FIZ1eRKBwXLYshgz', price: '$500,000', return: '8% p.a.' },
  { id: 2, title: 'City Apartment', image: 'https://utfs.io/f/9iW76r34sJuYOnr5vXmj59EMNWpJC3r6FIZ1eRKBwXLYshgz', price: '$250,000', return: '6% p.a.' },
  { id: 3, title: 'Beachfront Property', image: 'https://utfs.io/f/9iW76r34sJuYOnr5vXmj59EMNWpJC3r6FIZ1eRKBwXLYshgz', price: '$750,000', return: '10% p.a.' },
  { id: 4, title: 'Mountain Retreat', image: 'https://utfs.io/f/9iW76r34sJuYOnr5vXmj59EMNWpJC3r6FIZ1eRKBwXLYshgz', price: '$400,000', return: '7% p.a.' },
]

export default function HighlightedListings() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % listings.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + listings.length) % listings.length)
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Highlighted Listings</h2>
        <div className="relative">
          <div className="flex overflow-hidden">
            {listings.map((listing, index) => (
              <div
                key={listing.id}
                className={`w-full flex-shrink-0 transition-all duration-300 ease-in-out ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={listing.image} alt={listing.title} className="w-full h-64 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{listing.title}</h3>
                    <p className="text-gray-600 mb-2">Price: {listing.price}</p>
                    <p className="text-green-600">Expected Return: {listing.return}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          >
            <ChevronLeft className="w-6 h-6 text-blue-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          >
            <ChevronRight className="w-6 h-6 text-blue-600" />
          </button>
        </div>
      </div>
    </section>
  )
}



