import type { Metadata } from "next";
import { Titillium_Web, Fira_Sans, Noto_Sans } from "next/font/google";
import "./globals.css";
import "rsuite/dist/rsuite-no-reset.min.css";
import { cookies } from "next/headers";
import React from "react";
import Navbar from "@/components/layouts/navbar";
import SideNav from "@/components/layouts/sidenav";
import { SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { Providers } from "./providers";
import { layoutConfig } from "./layout.config";

export const metadata: Metadata = {
  title: "My Mood Board",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const defaultOpen = (await cookies()).get("sidebar:state")?.value === "true";

  return (
    <html lang="en">
      <body className="">
        <Providers defaultOpen={defaultOpen}>
          <aside
            className="hidden md:block"
            style={{
              // width: layoutConfig.sidebar.width,
              background: layoutConfig.sidebar.background,
            }}
          >
            <SideNav title="Design Space" />
          </aside>
          <main className="flex flex-col">
            <div className="z-[50]">
              <div className="w-full space-x-3">
                <Navbar />
              </div>
              <div className="xs:hidden bg-transparent">
                <SidebarTrigger />
              </div>
            </div>
            {/* <div className=" mx-auto flex flex-auto"> */}
            <div className="z-50 p-6 grid xL:grid-cols-12 lg:grid-cols-9 sm:grid-cols-4">
              {children}
            </div>
            {/* </div> */}
          </main>
        </Providers>
      </body>
    </html>
  );
}
