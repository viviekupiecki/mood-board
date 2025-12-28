import type { Metadata } from "next";
import "./globals.css";
import "rsuite/dist/rsuite-no-reset.min.css";
import { cookies } from "next/headers";
import React from "react";
import Navbar from "@/components/layouts/navbar";
import SideNav from "@/components/layouts/sidenav";
import { SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { Providers } from "./providers";
import Footer from "@/components/layouts/footer";

export const metadata: Metadata = {
  title: "My Mood Board",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const defaultOpen = (await cookies()).get("sidebar:state")?.value === "true";

  return (
    <html lang="en" className="w-full">
      <body className="w-full">
        <Providers defaultOpen={defaultOpen}>
          <SideNav title="Design Space" />
          <SidebarInset className="flex flex-col w-full min-w-0">
            <div className="w-full">
              <Navbar />
              <div className="xs:hidden bg-transparent">
                <SidebarTrigger />
              </div>
            </div>
            <div className="flex-1 w-full min-w-0">{children}</div>
            <Footer />
          </SidebarInset>
        </Providers>
      </body>
    </html>
  );
}
