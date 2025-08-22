"use client";

import { CustomProvider } from "rsuite";
import { SidebarProvider } from "@/components/ui/sidebar";

export function Providers({
  children,
  defaultOpen,
}: {
  children: React.ReactNode;
  defaultOpen: boolean;
}) {
  return (
    <CustomProvider theme="dark">
      <SidebarProvider defaultOpen={defaultOpen}>{children}</SidebarProvider>
    </CustomProvider>
  );
}
