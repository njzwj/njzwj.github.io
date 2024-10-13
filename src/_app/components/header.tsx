import {
  Navbar, NavbarBrand, NavbarContent,
  NavbarItem, Link, Input,
} from "@nextui-org/react";
import _ from "underscore";
import { BLOG_NAME, STATIC_NAV_ITEMS } from "@/lib/constants";


// This is common header for all pages.
const Header = () => {
  return (
    <Navbar isBordered className="mb-6">
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <p className="hidden sm:block font-bold text-inherit">
            {BLOG_NAME}
          </p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-3">
        {
          _.map(STATIC_NAV_ITEMS, (item: { title: string, href: string }) => (
            <NavbarItem key={item.title}>
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
    </Navbar>
  );
};

export default Header;
