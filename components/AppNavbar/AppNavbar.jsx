import { Navbar, Center } from "@mantine/core";
import { useRouter } from "next/router";
import { useMantineColorScheme } from "@mantine/core";
import { useSelector } from "react-redux";
import Link from "next/link";
import { AiOutlineHome, AiOutlineContacts } from "react-icons/ai";

const NavLink = ({ children, href, exact, ...props }) => {
  const { pathname } = useRouter();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <a
        className={`${
          isActive && "active"
        } flex items-center w-full py-2 mb-1 rounded-lg px-3 font-semibold ${
          !isActive && "text-slate-500"
        } hover:bg-teal-50 hover:text-teal-500 transition-colors dark:text-dark-100 dark:hover:bg-dark-500`}
        {...props}
      >
        {children}
      </a>
    </Link>
  );
};

const AppNavbar = () => {
  const { colorScheme } = useMantineColorScheme();
  const { isOpen } = useSelector((state) => state.navbar);
  return (
    <Navbar
      p={15}
      className={colorScheme === "dark" ? "dark" : ""}
      width={{ base: 250 }}
      hidden={!isOpen}
      height="100%"
      hiddenBreakpoint="md"
    >
      <Navbar.Section>
        <ul>
          <li>
            <NavLink href="/home">
              <AiOutlineHome className="text-2xl outline-2 mr-4" /> Home
            </NavLink>
          </li>
          <li>
            <NavLink href="/contact">
              <AiOutlineContacts className="text-2xl mr-4" />
              Contact
            </NavLink>
          </li>
        </ul>
      </Navbar.Section>
    </Navbar>
  );
};

export default AppNavbar;
