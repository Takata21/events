"use client";
import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavItems() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <ul className="md:flex-between flex w-full flex-col md:flex-row items-start gap-5 md:flex-grow whitespace-nowrap">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;
        console.log(isActive);
        return (
          <li
            key={link.route}
            className={`${
              isActive && "text-primary-500"
            } flex-center p-medium-16`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
}
