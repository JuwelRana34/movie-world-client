import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { Rating } from "react-simple-star-rating";
import ThemeContext from "../AuthProvider/ThemeProvider"
function FeaturedMovies() {
  const [featuredMovies, setFeaturedMovies] = useState([]);
 const {theme} = useContext(ThemeContext)
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
    <div className=" mx-auto container px-2 gap-3 my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {featuredMovies.length === 0? (
        <h1 className="flex items-center justify-center col-span-3 animate-pulse text-2xl text-center font-semibold text-gray-500">Loading...</h1>):<>

      {featuredMovies.map((movie ) => {
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
                
                <Rating
                  count={movie.rating}
                  className="flex"
                  initialValue={movie.rating}
                  readonly
                />
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
              <Link to={`/detailMovie/${movie._id}`} className={`rounded-md font-semibold w-fit  mx-1 px-3 py-2 my-3 ${theme ==='light'?" bg-rose-600/90" : 'bg-gray-700'}  `}  >See Details</Link>
            </div>

            
            </div>
            


          </div>
        );
      })}

</>}
    </div>
  );
}

export default FeaturedMovies;
