import React from "react";
import NavLink from "next/link";
import { AiFillHome } from "react-icons/ai";
import {
  BsBookFill,
  BsPencilFill,
  BsPersonLinesFill,
  BsFillKeyboardFill,
  BsArrow90DegRight,
  BsArrow90DegLeft,
} from "react-icons/bs";
import { Button } from "@/components/ui/button";
import "./sidebar-navigation.css";
import { useState } from "react";
import { sideNavData } from "@/lib/constants";

interface SidebarProps {
  title: string;
}

const Sidenav: React.FC<SidebarProps> = (title) => {
  const [open, setOpen] = useState(true);

  const toggleSideNav = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className={open ? "sidenav" : "sideNavClosed"}>
        <Button className="menuBtn" onClick={toggleSideNav}>
          {open ? <BsArrow90DegLeft /> : <BsArrow90DegRight />}
        </Button>
        {open &&
          sideNavData.map((item) => {
            return (
              <div key={item.id} className="sideitem">
                {item.icon}

                <NavLink href={item.link} className="linkText">
                  {item.name}
                </NavLink>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Sidenav;
