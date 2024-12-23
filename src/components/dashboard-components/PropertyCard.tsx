'use client'

import Image from 'next/image'
import { FileText } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { ScheduleDialog } from './Schedule-Dialog'

interface PropertyCardProps {
  property: {
    id: string
    image: string
    address: string
    size: string
    status: string
    hasReports?: boolean
  }
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Card>
      <CardContent className="p-0">
        <div className="aspect-video relative">
          <Image
            src={property.image}
            alt={property.address}
            fill
            className="object-cover rounded-t-lg"
          />
        </div>
        <div className="p-4 space-y-2">
          <h3 className="font-medium">{property.address}</h3>
          <div className="text-sm text-muted-foreground space-y-1">
            <p>Size: {property.size}</p>
            <p>Status: {property.status}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-4 pb-4 pt-0 flex gap-2">
        <ScheduleDialog />
        {property.hasReports && (
          <Button variant="outline" size="sm">
            <FileText className="h-4 w-4 mr-2" />
            Reports
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}


