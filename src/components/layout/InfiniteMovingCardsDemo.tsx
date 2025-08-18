"use client";
import { InfiniteMovingCards } from "../modules/HomePage/infinite-moving-cards";
export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    review:
      "Exploring the Sundarbans was an unforgettable experience! The mangrove forest, wildlife, and peaceful boat rides made it truly magical. Highly recommended for nature lovers.",
    traveler: "Arif Hossain",
    tour: "Sundarbans Adventure",
  },
  {
    review:
      "Cox's Bazar has the longest beach I have ever seen. The sunsets were breathtaking, and the local seafood was delicious. A perfect beach getaway in Bangladesh!",
    traveler: "Fatima Rahman",
    tour: "Cox's Bazar Beach Tour",
  },
  {
    review:
      "Visiting the ancient city of Paharpur and the historic ruins gave me a deep insight into Bangladesh's rich heritage. The guides were knowledgeable and made it very enjoyable.",
    traveler: "Jamal Uddin",
    tour: "Paharpur Heritage Tour",
  },
  {
    review:
      "The tea gardens of Sylhet are absolutely stunning! Walking through the rolling green hills and sipping fresh tea was so relaxing. Truly a peaceful retreat.",
    traveler: "Nusrat Jahan",
    tour: "Sylhet Tea Garden Experience",
  },
  {
    review:
      "I loved the boat ride in the beautiful haor wetlands of northeastern Bangladesh. Birdwatching, local villages, and serene nature made this trip unforgettable.",
    traveler: "Rashed Khan",
    tour: "Haor Wetlands Tour",
  },
   {
    review:
      "Exploring the Sundarbans was an unforgettable experience! The mangrove forest, wildlife, and peaceful boat rides made it truly magical. Highly recommended for nature lovers.",
    traveler: "Arif Hossain",
    tour: "Sundarbans Adventure",
  },
  {
    review:
      "Cox's Bazar has the longest beach I have ever seen. The sunsets were breathtaking, and the local seafood was delicious. A perfect beach getaway in Bangladesh!",
    traveler: "Fatima Rahman",
    tour: "Cox's Bazar Beach Tour",
  },
  {
    review:
      "Visiting the ancient city of Paharpur and the historic ruins gave me a deep insight into Bangladesh's rich heritage. The guides were knowledgeable and made it very enjoyable.",
    traveler: "Jamal Uddin",
    tour: "Paharpur Heritage Tour",
  },
  {
    review:
      "The tea gardens of Sylhet are absolutely stunning! Walking through the rolling green hills and sipping fresh tea was so relaxing. Truly a peaceful retreat.",
    traveler: "Nusrat Jahan",
    tour: "Sylhet Tea Garden Experience",
  },
  {
    review:
      "I loved the boat ride in the beautiful haor wetlands of northeastern Bangladesh. Birdwatching, local villages, and serene nature made this trip unforgettable.",
    traveler: "Rashed Khan",
    tour: "Haor Wetlands Tour",
  },
];
