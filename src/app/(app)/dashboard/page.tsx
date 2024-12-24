import { PropertyGrid } from "@/components/dashboard-components/PropertyGrid";

export default async function Home() {
  return (
    <main className="space-y-4">
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
          <PropertyGrid />
        </main>
      </div>
    </main>
  );
}
