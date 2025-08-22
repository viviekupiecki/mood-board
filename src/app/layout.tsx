import type { Metadata } from "next";
import { Titillium_Web, Fira_Sans } from "next/font/google";
import "./globals.css";
import "rsuite/dist/rsuite-no-reset.min.css";
import { cookies } from "next/headers";
import React from "react";
import MenubarLayout from "./menubar-layout";
import SideNavLayout from "./sidenav-layout";
import { SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { Providers } from "./providers";
import { layoutConfig } from "./layout.config";

const titillium = Titillium_Web({ weight: "400", subsets: ["latin"] });
const fira = Fira_Sans({ weight: "400", subsets: ["latin"] });

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
      <body className={`${titillium.className} ${fira.className}`}>
        <Providers defaultOpen={defaultOpen}>
          <aside
            className="hidden md:block"
            style={{
              // width: layoutConfig.sidebar.width,
              background: layoutConfig.sidebar.background,
            }}
          >
            <SideNavLayout title="Design Space" />
          </aside>
          <main className="flex-1 flex flex-col">
            <div className="flex z-[50]">
              <div className="xs:hidden">
                <SidebarTrigger />
              </div>

              <MenubarLayout />
            </div>
            <div className="p-4 flex-1">
              <div className=" mx-auto flex flex-auto">
                <div className="z-50">{children}</div>
              </div>
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
