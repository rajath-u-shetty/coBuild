'use client'
import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Listing {
  id: number
  title: string
  price: string
  return: string
}

const listings: Listing[] = [
  { id: 1, title: 'Luxury Villa', price: '$500,000', return: '8% p.a.' },
  { id: 2, title: 'City Apartment', price: '$250,000', return: '6% p.a.' },
  { id: 3, title: 'Beachfront Property', price: '$750,000', return: '10% p.a.' },
  { id: 4, title: 'Mountain Retreat', price: '$400,000', return: '7% p.a.' },
]

export default function HighlightedListings() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined

    if (!isHovered) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % listings.length)
      }, 3000)
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [isHovered])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % listings.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + listings.length) % listings.length)
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 bg-red-50">
      <Card>
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
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {listings.map((listing) => (
                <div 
                  key={listing.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="bg-gray-200 h-48 flex items-center justify-center">
                      <img 
                        src="/api/placeholder/400/320"
                        alt={listing.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{listing.title}</h3>
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

            {isHovered && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {listings.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary w-4' : 'bg-gray-300'
                  }`}
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

