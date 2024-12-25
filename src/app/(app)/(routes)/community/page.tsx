import { HandshakeIcon, Users2, PiggyBank } from 'lucide-react'

import { Card, CardContent } from "@/components/ui/card"
import { FeatureCard } from '@/components/community/feature-card'
import { CommunityForm } from '@/components/community/community-form'
import { ContactInfo } from '@/components/community/conatct-info'

const features = [
  {
    icon: HandshakeIcon,
    title: "Networking",
    description: "Connect with fellow property investors and industry experts",
  },
  {
    icon: Users2,
    title: "Mentorship",
    description: "Learn from experienced professionals in real estate",
  },
  {
    icon: PiggyBank,
    title: "Co-investment",
    description: "Find opportunities to collaborate on property investments",
  },
]

export default function CommunityPage() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Community</h1>
        <p className="text-muted-foreground max-w-3xl">
          Join our thriving community of property investors and professionals. 
          Benefit from networking opportunities, mentorship programs, and potential co-investment partnerships.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>

      <Card>
        <CardContent className="p-6">
          <CommunityForm />
        </CardContent>
      </Card>

      <ContactInfo />
    </div>
  )
}


