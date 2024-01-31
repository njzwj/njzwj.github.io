import Link from "next/link";
import { BLOG_DESCRIPTION, BLOG_NAME } from "@/lib/constants";
import Container from "@/app/components/container";

// This is common header for all pages.
const Header = () => {
  return (
    <header className="mb-20 mt-8">
      <Container>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
          <Link href="/" className="hover:underline">
            {BLOG_NAME}
          </Link>
        </h2>
        <p className="text-green-600 text-md md:text-2xl">
          {BLOG_DESCRIPTION}
        </p>
      </Container>
    </header>
  );
};

export default Header;
