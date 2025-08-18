"use client";
import { useGetMostAllTourQuery } from "@/redux/features/Tour/tour.api";
import { LayoutGrid } from "../modules/HomePage/layout-grid";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";


export default function MTours() {
  const { data } = useGetMostAllTourQuery(undefined);

  // Transform tour data into cards for LayoutGrid
  const cards = data?.map((item, index) => ({
    id: index + 1,
    content: (
      <div>
        <h3 className="font-bold md:text-2xl text-xl text-white mb-2">
          {item.title}
        </h3>
        
        <div className="flex items-center justify-between mb-2 text-white">
          <span className="font-bold text-lg">From ৳{item.costFrom.toLocaleString()}</span>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-2 text-sm text-neutral-200">
          <div>
            <span className="font-medium">From:</span> {item.departureLocation}
          </div>
          <div>
            <span className="font-medium">To:</span> {item.arrivalLocation}
          </div>
          <div>
            <span className="font-medium">Duration:</span> {item.tourPlan.length} days
          </div>
        </div>
        < Button asChild  className="w-full">
          <Link to={`/tours/${item._id}`}>View Details</Link>
        </Button>
      </div>
    ),
    className: index % 2 === 0 ? "md:col-span-2" : "col-span-1", // Alternate card sizes
    thumbnail: item.images[0], // Use first image as thumbnail
  }));

  return (
    <div className="container mx-auto px-5 py-8">
      <div className="h-screen py-10 w-full">
        {cards && <LayoutGrid cards={cards} />}
      </div>
    </div>
  );
}
