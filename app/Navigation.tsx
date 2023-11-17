import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";

const Navigation = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <>
      <nav className="flex space-x-8 border-b px-10 h-14 items-center">
        <Link href="/">
          <AiFillBug />
        </Link>
        <ul className="flex space-x-8 ">
          {links.map((link) => (
            <Link key={link.href} className=" text-zinc-400 hover:text-zinc-900" href={link.href}>
              {link.label}
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
