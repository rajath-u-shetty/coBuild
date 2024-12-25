import Navbar from "@/components/landingpage-componentsr/Navbar";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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


