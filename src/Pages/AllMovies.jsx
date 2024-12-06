import axios from "axios";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import Loading from './Loading'
import { Link } from "react-router";
import img from "../../public/images/not-found.gif"
function AllMovies() {
  const [movies, setMovies] = useState([]);
  const [loadingdata, setLoadingData] = useState(true);
  const [scarch, setScarch] = useState('');

  
  useEffect(() => {
    const movies = () => {
      axios
        .get("https://movieworld-ochre.vercel.app/")
        .then((res) =>{
           setMovies(res.data)
           setLoadingData(false)
          })
        .catch((err) => console.log(err));
    };
    movies();
  }, []);

  useEffect(() => {
      axios.get(`http://localhost:3000?scarchMove=${scarch}`)
      .then(({data} )=> setMovies(data))
  }, [scarch]);
 
  if(loadingdata){
    return <Loading/>
  }





  return (
    <> 
    <label className="input input-bordered w-[90%] md:w-1/2 mx-auto my-8 flex items-center gap-2">
  <input type="text" onChange={(e)=>setScarch(e.target.value)} className="grow" placeholder="Search movie by title... " />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>

    <div className="mx-auto container gap-3 my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {movies.length === 0 ? <h1 className=" flex items-center justify-center col-span-3 text-xl text-center font-semibold text-gray-500"> Movie not found. <img className="w-14" src={img} alt="" /></h1> : <>
      {movies.map((movie) => {
        return (
          <div key={movie._id} className="movie-details text-center border transition-all">
            <h1 className="text-center text-xl font-bold py-2 text-blue-500">
              {movie.Title}
            </h1>
            <img
              className="mx-auto w-64"
              src={movie.Poster}
              alt={movie.Title}
            />
            <div className="text-start  w-6/12 mx-auto">
              <p>
                <strong>Duration: </strong>
                {movie.Duration} minutes
              </p>
              <p>
                <strong>Release Year: </strong>
                {movie.ReleaseYear}
              </p>
              <p className="text-justify">
                <strong>Summary: </strong>
                {movie.Summary}
              </p>
              <p className="flex items-center gap-1 font-semibold">
                <strong>Rating: </strong> <FaStar className="text-orange-500 text-xl"/> {movie.rating}/5
              </p>

              <ul className="flex justify-start gap-3">
                <h3 className=" font-semibold">Genres:</h3>
                {movie.genres.map((genre, index) => (
                  <li key={index}>{genre},</li>
                ))}
              </ul>
            </div>
            <Link to={`/detailMovie/${movie._id}`} className="btn  btn-success text-white my-2">See Details</Link>
           
          </div>
        );
      })}
      </>}
    </div>

    </>
  );
}

export default AllMovies;
