import { Button } from "@/components/ui/button";
import Link from "next/link";
import Header from "./_components/Header";
import { BookText, CookingPotIcon } from "lucide-react";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center">
        <div className="flex flex-col gap-14 items-center p-10">
          <h2 className="text-4xl">
            The easiest way to edit and enlighten your Svgs!
          </h2>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/kitchen" className="flex items-center gap-2">
              <Button className="w-full" size="lg">
                <CookingPotIcon className="size-5" />
                <span className="text-md">Start cooking</span>
              </Button>
            </Link>
            <Link href="/kitchen" className="flex items-center gap-2">
              <Button className="w-full" disabled variant="outline" size="lg">
                <BookText className="size-5" />
                <span className="text-md">Check our recipes</span>
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
