import { navLinks } from "@/data";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-2 text-3xl">
      {navLinks.map((link) => (
        <div className="hover:bg-slate-50 transition-all 0 p-2 rounded-lg" key={link.title}>
          <Link href={link.url}>{link.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default NavBar;
