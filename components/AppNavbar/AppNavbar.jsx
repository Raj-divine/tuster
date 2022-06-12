import { Navbar, Center } from "@mantine/core";
import { useRouter } from "next/router";
import { useMantineColorScheme } from "@mantine/core";
import Link from "next/link";
import { AiOutlineHome, AiOutlineContacts } from "react-icons/ai";

const NavLink = ({ children, href, exact, ...props }) => {
  const { pathname } = useRouter();
  console.log(pathname);
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <a
        className={`${
          isActive && "active"
        } flex items-center w-full py-3 mb-2 rounded-lg px-3 font-semibold ${
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
  return (
    <Navbar
      p={15}
      className={colorScheme === "dark" ? "dark" : ""}
      width={{ base: 300 }}
      height="100%"
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
