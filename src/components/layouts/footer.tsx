import { Mail } from "lucide-react";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub, BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="text-xl py-3 bg-sidebar border-t border-primary-400 shadow-md">
      <div className="px-6">
        <div className="grid grid-cols-4">
          <div className="text-xs font-medium col-span-1">
            <p className="row-start-1">Vivienne Kupiecki</p>
            <div className="flex items-start p-0 row-start-2 gap-x-1 pt-1">
              <a
                href={"https://www.linkedin.com/in/vivienne-kupiecki/"}
                target="_blank"
                rel="noopener"
                className="flex items-center gap-x-1 overflow-hidden rounded-xl p-1 outline-none ring-sidebar-ring transition-all duration-100 ease-in-out hover:bg-accent-500 hover:scale-[1.02] focus-visible:ring-2 active:bg-accent-600 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50"
              >
                <AiFillLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/viviekupiecki"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-x-1 overflow-hidden rounded-xl p-1 outline-none ring-sidebar-ring transition-all duration-100 ease-in-out hover:bg-accent-500 hover:scale-[1.02] focus-visible:ring-2 active:bg-accent-600 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50"
              >
                <BsGithub className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/viviekupiecki"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-x-1 overflow-hidden rounded-xl p-1 outline-none ring-sidebar-ring transition-all duration-100 ease-in-out hover:bg-accent-500 hover:scale-[1.02] focus-visible:ring-2 active:bg-accent-600 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50"
              >
                <BsInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="col-span-1">
            <p className="text-xs font-medium row-start-1 col-start-2">
              Where to Reach me
            </p>
            <ul className="text-xs list-outside text-sidebar-primary-foreground row-start-2 py-1">
              <li>
                <a
                  className="flex items-center gap-x-1 overflow-hidden rounded-xl p-1 outline-none ring-sidebar-ring transition-all duration-100 ease-in-out hover:bg-accent-500 hover:scale-[1.02] focus-visible:ring-2 active:bg-accent-600 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 w-[70px]"
                  href="mailto:vkupiecki@gmail.com"
                >
                  <Mail className="h-5 w-5" />
                  <p>Email</p>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-2 text-right text-xs row-start-1 col-start-3 text-sidebar-primary-foreground italic">
            Copyright @ 2025 All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
}
