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
          <h2 className="text-4xl">The easiest way to edit and enlighten your Svgs!</h2>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg">
              <Link href="/kitchen" className="flex items-center gap-2">
                <CookingPotIcon className="size-5" />
                <span className="text-md">Start cooking</span>
                </Link>
            </Button>
            <Button disabled variant="outline" size="lg">
              <Link href="/kitchen" className="flex items-center gap-2">
                <BookText className="size-5" />
                <span className="text-md">Check our recipes</span>
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
