import { Link } from "react-router";
import Carosel from "../Components/Carosel";
import FeaturedMovies from "../Components/FeaturedMovies";
import Newslatter from "../Components/Newslatter";
import WhyJoinUs from "../Components/WhyJoinUs";

function Home() {
  return (
    <div>
      <Carosel />

      <div className=" container mx-auto">
        <h1 className=" font-bold pl-6 mt-10 bg-clip-text text-transparent  bg-gradient-to-l from-rose-500 to-orange-500 text-3xl">
          FeaturedMovies:{" "}
        </h1>
        <FeaturedMovies />
        <div className="text-center py-10">
        <Link
          to="/AllMovies"
          className="py-3 px-5 rounded-md bg-gradient-to-r from-rose-500  to-orange-600 text-white font-semibold  "
        >
          See all movies
        </Link>
      </div>
        <WhyJoinUs />
        <Newslatter />
      </div>
    </div>
  );
}

export default Home;
