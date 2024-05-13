import { ModeToggle } from "@/components/common/ThemeToggle";
import MultiStepForm from "@/components/multistep-form/MultiStepForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-8 px-24">
      <ModeToggle/>
      <MultiStepForm/>
    </main>
  );
}
