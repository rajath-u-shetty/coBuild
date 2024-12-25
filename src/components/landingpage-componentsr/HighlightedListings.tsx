'use client'
import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Listing {
  id: number
  title: string
  location: string
  price: string
  return: string
  image: string
}

const listings: Listing[] = [
  { id: 1, title: 'Luxury Villa', location: 'Beverly Hills', price: '$500,000', return: '8% p.a.', image: '/carousel.jpeg' },
  { id: 2, title: 'City Apartment', location: 'Miami', price: '$250,000', return: '6% p.a.', image: '/carousel2.jpeg' },
  { id: 3, title: 'Beachfront Property', location: 'Malibu', price: '$750,000', return: '10% p.a.', image: '/carousel3.jpeg' },
  { id: 4, title: 'Mountain Retreat', location: 'Aspen', price: '$400,000', return: '7% p.a.', image: '/carousel4.jpeg' },
  { id: 5, title: 'Downtown Loft', location: 'New York', price: '$600,000', return: '9% p.a.', image: '/carousel.jpeg' },
  { id: 6, title: 'Lake House', location: 'Lake Tahoe', price: '$450,000', return: '8.5% p.a.', image: '/carousel2.jpeg' },
]

const SLIDES_TO_SHOW = 3
const TOTAL_SLIDES = listings.length
const LAST_INDEX = TOTAL_SLIDES - SLIDES_TO_SHOW

export default function HighlightedListings() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined

    if (!isHovered) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex >= LAST_INDEX ? 0 : prevIndex + 1
        )
      }, 3000)
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [isHovered]) // Only depend on isHovered

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= LAST_INDEX ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? LAST_INDEX : prevIndex - 1
    )
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <Card className="border-none shadow-none bg-transparent">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center mb-8">
            Featured Properties
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div
            className="relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / SLIDES_TO_SHOW)}%)` }}
            >
              {listings.map((listing) => (
                <div
                  key={listing.id}
                  className="w-1/3 flex-shrink-0 px-2"
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="relative h-48">
                      <img
                        src={listing.image}
                        alt={listing.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-1">{listing.title}</h3>
                      <div className="flex items-center text-gray-600 mb-3">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-sm">{listing.location}</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Price</span>
                          <span className="font-semibold text-primary">{listing.price}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Expected Return</span>
                          <span className="font-semibold text-green-600">{listing.return}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className={`absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-r-lg p-2 shadow-lg transition-all ${currentIndex <= 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
              disabled={currentIndex <= 0}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className={`absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-l-lg p-2 shadow-lg transition-all ${currentIndex >= LAST_INDEX ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
              disabled={currentIndex >= LAST_INDEX}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Navigation */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
              {[...Array(TOTAL_SLIDES - 2)].map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-primary w-4' : 'bg-gray-300'}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

