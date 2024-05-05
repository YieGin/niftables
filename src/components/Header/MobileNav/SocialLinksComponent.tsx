import { SocialLinks } from "@/lib/constant";
import Image from "next/image";
import Link from "next/link";

const SocialLinksComponent = () => (
  <div className="flex justify-center gap-5 mt-auto">
    {SocialLinks.map((item, index) => (
      <Link
        target="_blank"
        href={item.link}
        key={index}
        className="hover:bg-[#3d8bff] cursor-pointer delay-75 rounded-full"
      >
        <Image
          className="h-max"
          alt="Logo"
          src={item.icon}
          width={34}
          height={34}
        />
      </Link>
    ))}
  </div>
);

export default SocialLinksComponent;
