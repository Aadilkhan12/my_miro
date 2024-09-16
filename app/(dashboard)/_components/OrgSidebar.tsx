"use client";
import Link from "next/link";
import Image from "next/image";
 import { Poppins } from "next/font/google";
 import logo from "../../../public/logo.svg"
import { cn } from "lib/utils";
  const font =Poppins({
    weight:["600"],
    subsets:["latin"]
  })
export const OrgSidebar = () => {
  return (
    <div className=" hidden lg:flex fex-col space-x-6 w-[260] pl-5 pt-5">
      <Link href="/">
        <div className=" flex items-center gap-x-2">
          <Image src={logo} alt="Logo" width={60} height={60}>
            <span
              className={cn("font-semibold text-2xl", font.className)}
            ></span>
            Board
          </Image>
        </div>
      </Link>
    </div>
  );
};
