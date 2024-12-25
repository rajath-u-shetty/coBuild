import { Mail, Phone } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4" />
          <a href="tel:+1-800-123-4567" className="text-sm">
            +1-800-123-4567
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4" />
          <a
            href="mailto:community@realestateplatform.com"
            className="text-sm break-all"
          >
            community@realestateplatform.com
          </a>
        </div>
      </CardContent>
    </Card>
  )
}


