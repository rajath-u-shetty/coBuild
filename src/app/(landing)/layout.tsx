import Navbar from "@/components/Navbar";
import { checkAuth } from "@/lib/auth/utils";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await checkAuth()
  return (
    <main>
      <div className="flex h-screen">
        <main className="flex-1 overflow-y-auto">
          <Navbar />
            {children}
        </main>
      </div>
    </main>
  )
}


