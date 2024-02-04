import Link from "next/link";
import { BLOG_DESCRIPTION, BLOG_NAME, STATIC_NAV_ITEMS } from "@/lib/constants";
import Container from "@/app/components/container";
import Navbar from "./navbar";

// This is common header for all pages.
const Header = () => {
  return (
    <header className="pt-8 pb-4 mb-16 bg-gray-100 shadow-inner">
      <Container>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
          <Link href="/" className="hover:underline">
            {BLOG_NAME}
          </Link>
        </h2>
        <p className="text-green-600 text-md md:text-2xl">
          {BLOG_DESCRIPTION}
        </p>
        <Navbar navlinks={STATIC_NAV_ITEMS} />
      </Container>
    </header>
  );
};

export default Header;
