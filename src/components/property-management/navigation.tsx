import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Users, Calendar, History, Phone } from 'lucide-react'
import { motion } from "framer-motion"

interface NavigationProps {
  selectedOption: string
  onSelect: (option: string) => void
}

export function Navigation({ selectedOption, onSelect }: NavigationProps) {
  const options = [
    { id: 'tenant', label: 'Tenant', icon: Users },
    { id: 'maintenance', label: 'Schedule Maintenance', icon: Calendar },
    { id: 'history', label: 'History', icon: History },
    { id: 'contact', label: 'Contact Manager', icon: Phone },
  ]

  return (
    <Card className="p-4">
      <motion.div 
        className="space-y-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {options.map((option, index) => {
          const Icon = option.icon
          return (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Button
                variant={selectedOption === option.id ? "default" : "outline"}
                className="w-full justify-start h-12 text-left"
                onClick={() => onSelect(option.id)}
              >
                <Icon className="mr-2 h-5 w-5" />
                <span className="flex-grow">{option.label}</span>
              </Button>
            </motion.div>
          )
        })}
      </motion.div>
    </Card>
  )
}


