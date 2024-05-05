import { navItems } from "@/lib/constant";
import Image from "next/image";
import Link from "next/link";

const NavLinks = () => (
  <>
    {navItems.map((item) => (
      <Link key={item.title} href={item.href} className="text-lg">
        <div
          className={`flex ${
            item.isNew ? "" : "hover:text-[#3D8BFF] delay-75 transition-all"
          }`}
        >
          <p>{item.title}</p>
          {item.isNew && (
            <Image
              className="ml-1 w-[38px] h-[14px] mt-[2px]"
              width={38}
              height={14}
              src="/svgs/Frame_soon.svg"
              alt="Soon Frame"
            />
          )}
        </div>
        <div className="bg-[#13171D] w-full h-[1px] my-[15px]" />
      </Link>
    ))}
  </>
);

export default NavLinks;
