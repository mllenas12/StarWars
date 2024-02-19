import { Carousel } from "./Carousel";
export const Home = () => {
  return (
    <div className=" w-full py-2 h-screen bg-[url('/src/assets/bg-body.webp')]">
      <h3 className="text-white text-center text-xs md:text-base lg:text-3xl p-4 lg:py-4">
        ALL OF YOUR STAR WARS FAVOURITES NOW STREAMING ON DISNEY+
      </h3>
      <div className="w-full m-auto py-2">
        <Carousel />
      </div>
    </div>
  );
};
