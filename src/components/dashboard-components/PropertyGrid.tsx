import { PropertyCard } from "./PropertyCard"

const properties = [
  {
    id: '1',
    images: ['/house.png', '/house.png'],
    address: '123 Main St, City, State',
    size: '2,500 sq ft',
    status: 'Occupied',
    hasReports: true,
  },
  {
    id: '2',
    images: ['/house.png'],
    address: '456 Oak Ave, City, State',
    size: '1,800 sq ft',
    status: 'Vacant',
  },
  // Add more properties as needed
]

export function PropertyGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  )
}


