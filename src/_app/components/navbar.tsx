import Link from "next/link";
import { NavLink } from "@/interfaces/navlink";

type Props = {
  navlinks: Array<NavLink>;
};

// Top horizontal nav bar
const Navbar = ({ navlinks }: Props) => {
  return (
    <nav className="flex mt-4">
      {navlinks.map((navlink) => (
        <Link
          key={navlink.href}
          href={navlink.href}
          className="hover:underline pr-4 font-md md:text-lg font-semibold"
        >
          {navlink.title}
        </Link>))
      }
    </nav>
  );
};

export default Navbar;
