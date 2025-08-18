import { InfiniteMovingCardsDemo } from "@/components/layout/InfiniteMovingCardsDemo";
import MTours from "@/components/layout/LayoutGridDemo";
import HeroSection from "@/components/modules/HomePage/HeroSection";
export default function Home() {

  return (
   <div>
      <HeroSection />

      {/* Trending Places Section */}
      <div className="container mx-auto px-5 py-8">
               <h1 className="mb-6 text-2xl font-bold tracking-tight text-pretty lg:text-5xl text-center">
                Trending{" "}
                <span className="text-primary">  Place</span>
              </h1>
        <MTours />
      </div>
       <div className="container mx-auto px-5 py-8">
 <h1 className="mb-6 text-2xl font-bold tracking-tight text-pretty lg:text-5xl text-center">
                Traveler {" "}
                <span className="text-primary">  Reviews</span>
              </h1>
      <InfiniteMovingCardsDemo/>
      </div>
    </div>
  );
}
