import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { FaStar } from "react-icons/fa6";

function FeaturedMovies() {
  const [featuredMovies, setFeaturedMovies] = useState([]);

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
    <div className=" mx-auto container gap-3 my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {featuredMovies.map((movie ,index) => {
        return (
          <div
            key={movie._id}
            className=" relative md:mx-auto md:w-80 p-2 text-gray-300 h-96  rounded-md shadow bg-blend-overlay "
            style={{
              backgroundImage: ` linear-gradient(0deg, #000000, rgba(0,0,0,0.1)) ,url(${movie.Poster})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              
            }}
          >
            <div >
              <div className="bg-gradient-to-t  w-full h-full from-black to-transparent absolute bottom-0 pl-2 left-0 flex flex-col justify-end">
              <h1 className="text-2xl capitalize font-semibold">{movie.Title}</h1>
              <p className="font-semibold">Release Year: {movie.ReleaseYear}</p>
              <p className="font-semibold">Duration: {movie.Duration} minutes</p>
              <div className="text-gray-200  flex items-center gap-2 text-md font-semibold">
                Rating:
                
                <FaStar className="text-yellow-500" />
                {`${movie.rating}/5`}
              </div>
              <div>
              <span className=" font-semibold">genres:</span> {movie?.genres?.map((i, index) => (
              <span
                className="px-1"
                key={index}
              >
                #{i}
              </span>
            ))}
              </div>
              <Link to={`/detailMovie/${movie._id}`} className={`rounded-md font-semibold w-fit mx-1 px-3 py-2 my-2 ${
                  index % 2 === 0 ? "bg-gray-600" : "bg-gray-600"
                }`} >See Details</Link>
            </div>

            
            </div>
            


          </div>
        );
      })}
    </div>
  );
}

export default FeaturedMovies;
