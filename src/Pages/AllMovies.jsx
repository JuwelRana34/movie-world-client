import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import Loading from "./Loading";
import { Link } from "react-router";
import img from "../../public/images/not-found.gif";
import ThemeContext from "../AuthProvider/ThemeProvider";

function AllMovies() {
  const [movies, setMovies] = useState([]);
  const [loadingdata, setLoadingData] = useState(true);
  const [scarch, setScarch] = useState("");
  const [sort, setSort] = useState();
  const { theme} = useContext(ThemeContext);
console.log(movies)
  useEffect(() => {
    const movies = () => {
      axios
        .get(`https://movieworld-ochre.vercel.app/?sort=${sort}&scarchMove=${scarch}`)
        .then((res) => {
          setMovies(res.data);
          setLoadingData(false);
        })
        .catch((err) => console.log(err));
    };
    movies();
  }, [sort,scarch]);


  if (loadingdata) {
    return <Loading />;
  }

  return (
    <>
      <label className="input input-bordered w-[90%] md:w-1/2 mx-auto my-8 flex items-center gap-2">
        <input
          type="text"
          onChange={(e) => setScarch(e.target.value)}
          className="grow"
          placeholder="Search movie by title... "
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>

      <div className={` ${theme === "dark"?"dark:bg-gray-700": "bg-white"}  container mx-auto rounded mb-10 p-2 text-end font-semibold`}>
        <select onChange={(e)=> setSort(e.target.value) } className="w-fit p-2 bg-slate-200 rounded focus:outline-none">
          <option value=''>Sort by rating</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      <div className="container mx-auto justify-items-center px-2 lg:justify-items-start md:px-0  gap-3 my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {movies.length === 0 ? (
          <h1 className=" flex items-center justify-center col-span-3 text-xl text-center font-semibold text-gray-500">
            Movie not found. <img className="w-14" src={img} alt="" />
          </h1>
        ) : (
          <>
            {movies.map((movie) => {
              return (
                <div  key={movie._id} className={`${theme === "dark"? "bg-gray-700":"bg-white "}  p-5 rounded-md w-full md:w-fit shadow-sm`}>
                  <div
                 
                  className=" relative md:mx-auto md:w-64 p-2 text-gray-300 h-96  rounded-md shadow bg-blend-overlay "
                  style={{
                    backgroundImage: ` linear-gradient(0deg, #000000, rgba(0,0,0,0.1)) ,url(${movie.Poster})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    
                  }}
                >
                  <div >
                    <div className="bg-gradient-to-t  w-full h-full from-black to-transparent absolute bottom-0 pl-2 left-0 flex flex-col justify-end">
                    <h1 className="text-2xl capitalize font-semibold">{movie.Title}</h1>
                    <p className="font-semibold"> {movie.ReleaseYear}</p>
                    <p className="font-semibold">{movie.Duration} min</p>
                    <div className="text-gray-200  flex items-center gap-2 text-md font-semibold">
                      
                      <FaStar className="text-yellow-400" />
                      {`${movie.rating}/5`}
                    </div>
                    <div>
                    <span className=" font-semibold"></span> {movie?.genres?.map((i, index) => (
                    <span
                      className="px-1"
                      key={index}
                    >
                      #{i}
                    </span>
                  ))}
                    </div>
                    <Link to={`/detailMovie/${movie._id}`} className={`rounded-md font-semibold w-fit  mx-1 px-3 py-2 my-3  bg-rose-600/90`}  >See Details</Link>
                  </div>

                  
                  </div>
                  


                </div>
                </div>
                
              );
            })}
          </>
        )}
      </div>
    </>
  );
}

export default AllMovies;
