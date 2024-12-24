'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { PlusCircle } from 'lucide-react'
import { PropertyCarousel } from '@/components/property-management/property-carousel'
import { Navigation } from '@/components/property-management/navigation'
import { TenantTable } from '@/components/property-management/tenant-table'
import { MaintenanceForm } from '@/components/property-management/maintainance-form'
import { HistoryTable } from '@/components/property-management/history-table'
import { TenantDialog } from '@/components/property-management/tenant-dialog'
import { motion } from 'framer-motion'

export default function PropertyManagement() {
  const [selectedOption, setSelectedOption] = useState<string>('tenant')
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <div className="container mx-auto p-4 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center"
      >
        <h1 className="text-3xl font-bold">Property Management</h1>
        <Button onClick={() => setDialogOpen(true)}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Tenant
        </Button>
      </motion.div>

      <div className="grid md:grid-cols-[400px,auto,1fr] gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <PropertyCarousel />
          <Navigation selectedOption={selectedOption} onSelect={setSelectedOption} />
        </motion.div>

        <div className="hidden md:block w-px bg-border h-full" />

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="border rounded-lg p-4 bg-background overflow-auto"
        >
          {selectedOption === 'tenant' && <TenantTable />}
          {selectedOption === 'maintenance' && <MaintenanceForm />}
          {selectedOption === 'history' && <HistoryTable />}
          {selectedOption === 'contact' && (
            <div className="text-center text-muted-foreground p-4">
              Contact manager details coming soon
            </div>
          )}
        </motion.div>
      </div>

      <TenantDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  )
}


