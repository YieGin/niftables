import Image from "next/image";
import React from "react";
import { Logo } from "../../public";
import Link from "next/link";
import Button from "./Button";
import MobileNav from "./MobileNav";

export const navItems = [
  { title: "Creon Pass", href: "#", isNew: false },
  { title: "Token", href: "#", isNew: true },
  { title: "AI Revenue", href: "#", isNew: true },
  { title: "AI Launchpad", href: "#", isNew: true },
];

const Header = () => {
  return (
    <div className="flex justify-between items-center sm:px-[50px] px-8 py-[30px] absolute w-full z-30">
      <Image className="h-max" alt="Logo" src={Logo} width={100} height={39} />
      <div className="hidden lg:flex justify-between font-satoshi-Bold">
        <div className="flex items-center gap-x-10">
          {navItems.map((item) => (
            <Link key={item.title} href={item.href} className="text-lg">
              <p
                className={`${
                  item.isNew
                    ? ""
                    : "hover:text-[#3D8BFF] delay-75 transition-all"
                }`}
              >
                {item.title}
                {item.isNew && (
                  <span className="bg-black text-[#AB23FF] px-1 py-[2px] uppercase ml-1 rounded-full text-[10px] relative bottom-2">
                    Soon
                  </span>
                )}
              </p>
            </Link>
          ))}
          <Button className="w-32 h-11">
            <span>Connect</span>
            <span>Connect</span>
          </Button>
        </div>
      </div>
      <MobileNav />
    </div>
  );
};

export default Header;
