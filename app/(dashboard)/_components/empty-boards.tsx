"use client";
import { useMutation } from "convex/react";
import { api } from "convex/_generated/api";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useOrganization } from "@clerk/nextjs";

export const EmptyBoards = () => {
  const { organization } = useOrganization();
  const create = useMutation(api.board.create);
  const onClick =()=>{
    if(!organization)
      return;
    create({
      orgId:organization.id,
      title:"Untitled"

    })
  }
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src={"/note.png"} height={110} width={110} alt="Empty" />
      <h2 className="text-2xl font-semibold mt-6">Create your first board!</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Start by creating a board for your organization
      </p>
      <div className="mt-6"></div>
      <Button onClick={onClick} size="lg">Create board</Button>
    </div>
  );
};
