import {
  Navbar, NavbarBrand, NavbarContent,
  NavbarItem, Link, Input,
} from "@nextui-org/react";
import _ from "underscore";
import { BLOG_DESCRIPTION, BLOG_NAME, STATIC_NAV_ITEMS } from "@/lib/constants";
import Container from "@/app/components/container";


// This is common header for all pages.
const Header = () => {
  // return (
  //   <header className="pt-8 pb-4 mb-16 bg-gray-100 shadow-inner">
  //     <Container>
  //       <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
  //         <Link href="/" className="hover:underline">
  //           {BLOG_NAME}
  //         </Link>
  //       </h2>
  //       <p className="text-green-600 text-md md:text-2xl">
  //         {BLOG_DESCRIPTION}
  //       </p>
  //       <Navbar navlinks={STATIC_NAV_ITEMS} />
  //     </Container>
  //   </header>
  // );
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
