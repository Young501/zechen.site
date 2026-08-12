"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

const navigations = [
  {
    name: "Home",
    link: "/",
    target: "_self",
  },
  {
    name: "Details",
    link: "/details",
    target: "_self",
  },
  {
    name: "Github",
    link: "https://github.com/Young501",
    target: "_blank",
  },
  {
    name: "Contact",
    link: "/contact",
    target: "_self",
  },
];

const MenuItemLink = ({
  href,
  target,
  children,
  active,
}: {
  href: string;
  target: string;
  children: React.ReactNode;
  active: boolean;
}) => {
  return (
    <Link
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`border-b text-sm no-underline transition-all duration-200 ${
        active
          ? "border-b-cyan-200 text-white"
          : "border-b-white/20 text-slate-300 hover:border-b-white/70 hover:text-white"
      }`}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="relative z-20 flex items-center justify-between px-6 py-5 primary-text">
      <Link
        href="/"
        className="border-b border-b-cyan-200/60 font-mono text-sm tracking-wide text-white transition-colors hover:border-b-white"
      >
        Young:)
      </Link>

      <div className="flex items-center gap-4">
        <nav className="hidden items-center gap-4 sm:flex">
          {navigations.map((navigation) => (
            <MenuItemLink
              href={navigation.link}
              target={navigation.target}
              key={navigation.name}
              active={pathname === navigation.link}
            >
              {navigation.name}
            </MenuItemLink>
          ))}
          <a
            href="/Zechen Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex size-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-200/50 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-200"
            aria-label="Open resume PDF"
            title="Open resume PDF"
          >
            <FileDown className="size-4" />
          </a>
        </nav>

        <div className="block sm:hidden">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger aria-label="Open navigation menu" />
                <NavigationMenuContent className="flex min-w-36 flex-col p-3">
                  {navigations.map((navigation) => (
                    <NavigationMenuLink
                      key={navigation.name}
                      href={navigation.link}
                      target={navigation.target}
                      className="rounded-md px-3 py-2 text-sm text-white transition-colors hover:bg-white/10"
                    >
                      {navigation.name}
                    </NavigationMenuLink>
                  ))}
                  <NavigationMenuLink
                    href="/Zechen Resume.pdf"
                    target="_blank"
                    className="rounded-md px-3 py-2 text-sm text-cyan-100 transition-colors hover:bg-white/10"
                  >
                    Resume PDF
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
