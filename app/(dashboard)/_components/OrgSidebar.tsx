"use client";
import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";
import logo from "../../../public/logo.svg"; 
import { useSearchParams } from "next/navigation";
import { cn } from "../../../lib/utils";
import { Button } from "../../../src/components/ui/button";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { LayoutDashboard, Star } from "lucide-react";
const font = Poppins({
  weight: ["600"],
  subsets: ["latin"],
});
export const OrgSidebar = () => {
  const searchParams=useSearchParams();
  const favorites = searchParams.get("favorites");
  return (
    <div className=" hidden lg:flex fex-col space-x-6 w-[260] pl-5 pt-5">
      <Link href="/">
        <div className=" flex items-center gap-x-2">
          <Image src={logo} alt="Logo" width={60} height={60} />
          <span className={cn("font-semibold text-2xl", font.className)}>
            Board
          </span>
        </div>
        <OrganizationSwitcher
          hidePersonal
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                marginBottom:"5px",
                alignItems: "center",
                width: "100%",
              },
              organizationSwitcherTrigger: {
                padding: "6px",
                width: "100%",
                borderRadius: "8px",
                border: "1px solid #E5E7E8",
                justifyContent: "space-between",
                backgroundColor: "white",
              },
            },
          }}
        />
        <div className="space-y-1 w-full">
          <Button
            variant={favorites ? "ghost" : "secondary"}
            asChild
            size={"lg"}
            className="font-normal justify-start px-2 w-full"
          >
            <Link href="/">
              <LayoutDashboard className="h-4 w-4 mr-2" />
              Team Boards
            </Link>
          </Button>
          <Button
            variant={favorites ? "secondary" : "ghost"}
            asChild
            size={"lg"}
            className="font-normal justify-start px-2 w-full"
          >
            <Link
              href={{
                pathname: "/",
                query: { favorites: true },
              }}
            >
              <Star className="h-4 w-4 mr-2" />
              Favorite Boards
            </Link>
          </Button>
        </div>
      </Link>
    </div>
  );
};
