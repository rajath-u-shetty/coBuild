'use client';

import * as React from 'react';
import {
  GalleryVerticalEnd,
  LayoutDashboard,
  Settings,
  PiggyBank,
  ArrowRightLeft,
  MapPinHouse,
  Users,
  ChartPie
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  // useSidebar,
} from '@/components/ui/sidebar';
import { NavUser } from './Nav-User';
import { NavMain } from './Nav-Main';

// This is sample data.
const data = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'My Investments',
    url: '/investments',
    icon: PiggyBank,
  },
  {
    title: 'Buy/Sell',
    url: '/buy-sell',
    icon: ArrowRightLeft,
  },
  {
    title: 'Property Management',
    url: '/property-management',
    icon: MapPinHouse,
  },
  {
    title: 'Community',
    url: '/community',
    icon: Users,
  },
  {
    title: 'Analytics',
    url: '/analytics',
    icon: ChartPie,
  },
  {
    title: 'Settings',
    url: '/settings',
    icon: Settings,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  // const { state } = useSidebar();
  return (
    <Sidebar variant="floating" collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip={'CoBuild'}>
              <GalleryVerticalEnd className="size-4 font-bold" />
              <span className="text-sm font-semibold">
                Co<span className="text-amber-500">Build</span>
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

