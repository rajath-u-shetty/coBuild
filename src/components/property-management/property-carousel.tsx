'use client'

import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export function PropertyCarousel() {
  return (
    <Card className="w-full">
      <CardContent className="p-0">
        <Carousel className="w-full">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="aspect-video relative"
                >
                  <Image
                    src={`/placeholder.svg?height=225&width=400`}
                    alt={`Property image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className={cn(
            "absolute left-2 top-1/2 -translate-y-1/2",
            "bg-background/80 hover:bg-background/90",
            "z-10"
          )} />
          <CarouselNext className={cn(
            "absolute right-2 top-1/2 -translate-y-1/2",
            "bg-background/80 hover:bg-background/90",
            "z-10"
          )} />
        </Carousel>
      </CardContent>
    </Card>
  )
}


