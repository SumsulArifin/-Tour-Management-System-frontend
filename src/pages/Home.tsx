import { BackgroundGradientDemo } from "@/components/modules/BackgroundGradientDemo";

export default function Home() {

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5">
        <div className="bg-gray-100 p-4"><BackgroundGradientDemo /></div>
        <div className="bg-gray-100 p-4"><BackgroundGradientDemo /></div>
        <div className="bg-gray-100 p-4"><BackgroundGradientDemo /></div>
        <div className="bg-gray-100 p-4"><BackgroundGradientDemo /></div>
        <div className="bg-gray-100 p-4"><BackgroundGradientDemo /></div>
        <div className="bg-gray-100 p-4"><BackgroundGradientDemo /></div>
        <div className="bg-gray-100 p-4"><BackgroundGradientDemo /></div>
        <div className="bg-gray-100 p-4"><BackgroundGradientDemo /></div>
        <div className="bg-gray-100 p-4"><BackgroundGradientDemo /></div>
      </div>

    </>
  );
}
