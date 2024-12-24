import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const tenants = [
  {
    id: 1,
    name: "John Doe",
    contact: "john@example.com",
    property: "123 Main St",
    leaseStart: "2024-01-01",
    leaseEnd: "2024-12-31",
    paymentStatus: "Paid",
  },
  // Add more dummy data as needed
]

export function TenantTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-md border"
    >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Contact Details</TableHead>
            <TableHead>Property</TableHead>
            <TableHead>Lease Start</TableHead>
            <TableHead>Lease End</TableHead>
            <TableHead>Payment Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tenants.map((tenant) => (
            <TableRow key={tenant.id}>
              <TableCell>{tenant.name}</TableCell>
              <TableCell>{tenant.contact}</TableCell>
              <TableCell>{tenant.property}</TableCell>
              <TableCell>{tenant.leaseStart}</TableCell>
              <TableCell>{tenant.leaseEnd}</TableCell>
              <TableCell>
                <Badge variant={tenant.paymentStatus === "Paid" ? "default" : "destructive"}>
                  {tenant.paymentStatus}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </motion.div>
  )
}


