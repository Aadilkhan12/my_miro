import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
export const EmptyOrg = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/elements.png" alt="Empty" height={200} width={200} />
      <h2 className="text-2xl font-semibold mt-6">Welcome to Board</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Create an organisation to get started
      </p>
      <div className="mt-6">
        <Dialog>
            <DialogTrigger>
                <Button size="lg">
                    Create Organization

                </Button>
                <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
<CreateOrganization/>
                </DialogContent>
            </DialogTrigger>
        </Dialog>

      </div>
    </div>
  );
};
