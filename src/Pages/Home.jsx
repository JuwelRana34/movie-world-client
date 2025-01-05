import { Link } from "react-router";
import Carosel from "../Components/Carosel";
import FeaturedMovies from "../Components/FeaturedMovies";
import Newslatter from "../Components/Newslatter";
import WhyJoinUs from "../Components/WhyJoinUs";
import { useContext } from "react";
import ThemeContext from "../AuthProvider/ThemeProvider";

function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <Carosel />

      <div className=" container mx-auto">
        <h1
          className={` font-bold pl-2 lg:pl-0 mt-8 bg-clip-text text-transparent ${
            theme === "dark"
              ? "bg-gray-300"
              : `bg-gradient-to-l from-rose-500 to-orange-500 `
          }   text-3xl`}
        >
          FeaturedMovies:
        </h1>
        <FeaturedMovies />
        <div className="text-center py-10">
          <Link
            to="/AllMovies"
            className={`py-3 px-5 rounded-md ${
              theme === "light"
                ? ` bg-gradient-to-r from-rose-500  to-orange-600 text-white font-semibold `
                : "bg-gray-600 text-gray-300 "
            }   `}
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
