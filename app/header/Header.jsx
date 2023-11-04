import Link from "next/link";
import React from "react";
import { VscGithub } from "react-icons/vsc";

const Header = () => {
  return (
    <header className="bg-[#ffc8cd] h-[4rem] w-full p-2">
      <div className="container">
        <nav className="flex justify-between items-center">
          <div className="flex gap-3 text-black items-center m-3">
            <h1 className="text-[1.4rem]">Students App</h1>
          </div>
          <div className="nav-links flex gap-5 text-black">
            <Link href="/">Home</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
