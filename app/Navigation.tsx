"use client"
import Link from "next/link";
import classnames from "classnames"
import React from "react";
import { AiFillBug } from "react-icons/ai";
import { usePathname } from "next/navigation";


const Navigation = () => {

    const currentPath = usePathname()

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <>
      <nav className="flex space-x-8 border-b px-10 h-14 mb-5 items-center">
        <Link href="/">
          <AiFillBug />
        </Link>
        <ul className="flex space-x-8 ">
          {links.map((link) => (
            <Link
              key={link.href}
              className={classnames({
                "text-zinc-900": link.href === currentPath,
                "text-zinc-400": link.href !== currentPath,
                "hover:text-zinc-900": true
              })}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
