import React from "react";
import Link from "next/link";
import {
  SidebarProvider,
  SidebarTrigger,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarGroupAction,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { Label } from "@/components/ui/label";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { ChevronDown, HomeIcon } from "lucide-react";
import { sideNavData, sideNavProjectsData } from "@/lib/constants";
import { AiFillProject } from "react-icons/ai";

interface SideNavLayoutProps {
  title: string;
}

const SideNavLayout: React.FC<SideNavLayoutProps> = (title) => {
  return (
    <div>
      <Sidebar collapsible="icon" side="left">
        <SidebarContent>
          <div className="p-4">
            <SidebarGroupLabel className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
              Table of Contents
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {sideNavData.map((data) => (
                  <SidebarMenuItem key={data.id}>
                    <SidebarMenuButton asChild>
                      <a href={data.link}>
                        <data.icon />
                        <span>{data.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </div>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <Collapsible defaultOpen className="group/collapsible">
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <AiFillProject />
                      <span>My Projects</span>
                      <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {sideNavProjectsData.map((data) => (
                        <SidebarMenuItem key={data.id}>
                          <SidebarMenuButton asChild>
                            <Link href={data.link}>
                              <data.icon />
                              <span>{data.title}</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </div>
  );
};

export default SideNavLayout;
