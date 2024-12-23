
import SignIn from "@/components/auth/SignIn";
import { PropertyGrid } from "@/components/dashboard-components/PropertyGrid";
import Navbar from "@/components/Navbar";
import { getUserAuth } from "@/lib/auth/utils";

export default async function Home() {
  const { session } = await getUserAuth();
  return (
    <main className="space-y-4">
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
          <PropertyGrid />
        </main>
      </div>
    </main>
  );
}
