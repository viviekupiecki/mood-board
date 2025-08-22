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

const MenubarLayout = () => {
  return (
    <div className="text-lg py-2">
      <div className="flex items-center align-middle">
        <NavigationMenu className="pl-5 sticky">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <span className="mr-2">
                    <AiFillHome />
                  </span>
                  <span>Home</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Projects" />
                </SelectTrigger>
                <SelectContent>
                  {sideNavData.map((item) => (
                    <SelectItem value={item.link} key={item.id}>
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

export default MenubarLayout;
