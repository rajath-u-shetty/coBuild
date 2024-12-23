import { checkAuth } from "@/lib/auth/utils";
import { Toaster } from "@/components/ui/sonner";
import NextAuthProvider from "@/lib/auth/Provider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { cookies } from "next/headers";
import { AppSidebar } from "@/components/AppSidebar";
export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await checkAuth();
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get('sidebar:state')?.value === 'true';

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
       <NextAuthProvider>
            <SidebarProvider defaultOpen={defaultOpen}>
              <AppSidebar />
              <main className="w-full">
                <SidebarTrigger className="fixed top-2" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                  {children}
                </div>
              </main>
            </SidebarProvider>
        </NextAuthProvider>
      <Toaster richColors />
    </SidebarProvider>
  )
}
