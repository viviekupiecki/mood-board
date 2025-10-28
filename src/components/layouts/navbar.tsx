"use client";

import { AiOutlineArrowDown } from "react-icons/ai";
import { Card } from "@/components/ui/card";
import { AiFillHome } from "react-icons/ai";
import {
  BreadcrumbItem,
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sideNavData } from "@/lib/constants";
import { Button } from "../ui/button";

const NavBar = () => {
  return (
    <div className="text-xl py-3 bg-accent-400 rounded-lg shadow-md">
      <div className="flex items-center align-middle">
        <NavigationMenu>
          <NavigationMenuList className="px-6 sticky gap-x-5">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <Button variant={'ghost'}>
                  <AiFillHome />
                  Home
                </Button>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Projects" />
                </SelectTrigger>
                <SelectContent className="">
                  {sideNavData.map((item) => (
                    <SelectItem
                      className="hover:bg-accent-400 py-2"
                      value={item.link}
                      key={item.id}
                    >
                      {" "}
                      <Link href={item.link}>{item.title}</Link>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <br />
      </div>
    </div>
  );
};

export default NavBar;
