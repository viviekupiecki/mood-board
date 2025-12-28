"use client";

import { AiFillHome } from "react-icons/ai";
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
    <div className="text-xl py-3 bg-sidebar rounded-lg shadow-md w-full min-w-0 sticky">
      <nav className="flex items-center justify-start w-full px-6 gap-x-5 top-0 z-[100]">
        <Button variant={"ghost"} className="hover:bg-accent-500 rounded-xl">
          <Link href="/" className="flex items-center gap-x-2">
            <AiFillHome />
            Home
          </Link>
        </Button>
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
      </nav>
    </div>
  );
};

export default NavBar;
