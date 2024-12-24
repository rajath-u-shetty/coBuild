'use client'

import * as React from 'react'
import Image from 'next/image'
import { FileText, MapPin, Maximize2, Circle } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ScheduleDialog } from './Schedule-Dialog'

interface PropertyCardProps {
  property: {
    id: string
    images: string[]
    address: string
    size: string
    status: string
    price?: string
    hasReports?: boolean
  }
}

export function PropertyCard({ property }: PropertyCardProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        setCurrent(emblaApi.selectedScrollSnap())
      })
    }
  }, [emblaApi])

  return (
    <Card className="group overflow-hidden border border-border/50 bg-card transition-all hover:shadow-lg">
      <CardContent className="p-6">
        <Carousel
          className="relative w-full"
          ref={emblaRef}>
          <CarouselContent>
            {property.images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={image}
                    alt={`${property.address} - View ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  {property.price && index === 0 && (
                    <div className="absolute bottom-4 left-4">
                      <Badge variant="secondary" className="bg-white/90 text-base font-semibold">
                        ${property.price}
                      </Badge>
                    </div>
                  )}
                  <Badge
                    variant="secondary"
                    className={`absolute right-4 top-4 ${property.status.toLowerCase() === 'available'
                        ? 'bg-emerald-500 text-white'
                        : 'bg-amber-500 text-white'
                      }`}
                  >
                    {property.status}
                  </Badge>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {property.images.length > 1 && (
            <>
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1">
                {property.images.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1.5 w-1.5 rounded-full transition-all ${current === index ? 'w-3 bg-white' : 'bg-white/50'
                      }`}
                  />
                ))}
              </div>
            </>
          )}
        </Carousel>

        <div className="mt-6 space-y-3">
          <div className="space-y-2">
            <div className="flex items-start justify-between">
              <h3 className="font-serif text-xl font-medium leading-tight text-card-foreground">
                {property.address}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{property.address}</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Maximize2 className="h-4 w-4" />
              <span>{property.size}</span>
            </div>
            <div className="flex items-center gap-1">
              <Circle className="h-4 w-4 fill-current" />
              <span>{property.status}</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t bg-card/50 px-6 py-4">
        <div className="flex w-full gap-2">
          <ScheduleDialog />
          {property.hasReports && (
            <Button variant="outline" size="sm">
              <FileText className="mr-2 h-4 w-4" />
              Reports
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
