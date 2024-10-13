"use client";

import {
  Navbar, NavbarBrand, NavbarContent,
  NavbarItem, Link, Input,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import _ from "underscore";
import React from "react";
import { BLOG_NAME, STATIC_NAV_ITEMS } from "@/lib/constants";

// This is common header for all pages.
const Header = (
  { active }: Readonly<{ active?: string }>
) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      isBordered
      className="mb-6"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
        <NavbarBrand>
          <p className="font-bold text-inherit">
            {BLOG_NAME}
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-3" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">
            {BLOG_NAME}
          </p>
        </NavbarBrand>
        {
          _.map(STATIC_NAV_ITEMS, (item: { title: string, href: string }) => (
            <NavbarItem key={item.title} isActive={item.title===active}>
              <Link
                color="foreground"
                href={item.href}
              >
                {item.title}
              </Link>
            </NavbarItem>
          ))
        }
      </NavbarContent>

      <NavbarMenu>
        {
          _.map(STATIC_NAV_ITEMS, (item: { title: string, href: string }) => (
            <NavbarMenuItem key={item.title} isActive={item.title===active}>
              <Link
                className="w-full font-sans"
                color="foreground"
                href={item.href}
                size="lg"
              >
                {item.title}
              </Link>
            </NavbarMenuItem>
          ))
        }
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
