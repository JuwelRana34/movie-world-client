import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import ThemeContext from "../AuthProvider/ThemeProvider";
import { FaStar } from "react-icons/fa";
function FeaturedMovies() {
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    const FeaturedMovies = () => {
      axios
        .get("https://movieworld-ochre.vercel.app/featuredMovies")
        .then((res) => {
          setFeaturedMovies(res.data);
        })
        .catch((err) => console.error(err));
    };
    FeaturedMovies();
  }, []);

  return (
    <div className="container mx-auto justify-items-center px-2 lg:justify-items-start md:px-0  gap-3 my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {featuredMovies.length === 0 ? (
        <h1 className="flex items-center  col-span-3 animate-pulse text-2xl text-center font-semibold text-gray-500">
          Loading...
        </h1>
      ) : (
        <>
          {featuredMovies.map((movie) => {
            return (
              <div
              className={`${theme === "dark"? "bg-gray-700":"bg-white "}  p-5 rounded-md w-full md:w-fit shadow-sm`}
                key={movie._id}
              >
                <div
                  className=" relative md:mx-auto md:w-64 p-2 text-gray-300 h-96  rounded-md shadow bg-blend-overlay "
                  style={{
                    backgroundImage: ` linear-gradient(0deg, #000000, rgba(0,0,0,0.1)) ,url(${movie.Poster})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div>
                    <div className="bg-gradient-to-t rounded-b-md w-full h-full from-black to-transparent absolute bottom-0 pl-2 left-0 flex flex-col justify-end">
                      <h1 className="text-2xl capitalize font-semibold">
                        {movie.Title}
                      </h1>
                      <p className="font-semibold"> {movie.ReleaseYear}</p>
                      <p className="font-semibold">{movie.Duration} min</p>
                      <div className="text-gray-200  flex items-center gap-2 text-md font-semibold">
                        <FaStar className="text-yellow-400" />

                        {`${movie.rating}/5`}
                      </div>
                      <div>
                        <span className=" font-semibold"></span>{" "}
                        {movie?.genres?.map((i, index) => (
                          <span className="px-1" key={index}>
                            #{i}
                          </span>
                        ))}
                      </div>
                      <Link
                        to={`/detailMovie/${movie._id}`}
                        className={`rounded-md font-semibold w-fit  mx-1 px-3 py-2 my-3 ${
                          theme === "light" ? " bg-rose-600/90" : "bg-gray-700"
                        }  `}
                      >
                        See Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default FeaturedMovies;
