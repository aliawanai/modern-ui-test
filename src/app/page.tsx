import { ModeToggle } from "@/components/common/ThemeToggle";
import MultiStepForm from "@/components/multistep-form/MultiStepForm";
import Image from "next/image";

export default function Home() {
  return (


    <div className="w-full h-screen lg:grid lg:grid-cols-2 ">
       <ModeToggle/>
      <div className="flex items-center justify-center py-4 order-2 mx-auto max-w-md ">
        <div className="rounded-md border px-6 py-3">
        <MultiStepForm/>
        </div>
      </div>
      <div className="hidden bg-muted lg:block order-1">
        <Image
          src="/Craft.png"
          alt="Image"
          width="1920"
          height="600"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
