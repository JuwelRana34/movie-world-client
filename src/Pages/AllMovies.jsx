import axios from "axios";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import Loading from './Loading'
import { Link } from "react-router";
function AllMovies() {
  const [movies, setMovies] = useState([]);
  const [loadingdata, setLoadingData] = useState(true);

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
  console.log(movies);
  if(loadingdata){
    return <Loading/>
  }

  return (
    <div className=" mx-auto container gap-3 my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {movies.map((movie) => {
        return (
          <div key={movie._id} className="movie-details text-center border">
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
    </div>
  );
}

export default AllMovies;
