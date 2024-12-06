import { useContext, useEffect, useState } from "react";
import { UserContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { toast } from "sonner";

function MyFavorites() {
  const { user } = useContext(UserContext);
  const [FavoritesMovies, setFavoritesMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/favoriteMovies`)
      .then(({ data }) => {
        const MyFavoritesMovie = data.filter(
          (move) => move.email === user.email
        );
        setFavoritesMovies(MyFavoritesMovie);
      })
      .catch((error) => console.error(error));
  }, [user.email]);

  const handelDeleteFavorite = (id) => {
    axios.delete(`http://localhost:3000/favoriteMoveDelete/${id}`)
    .then(() =>{
      toast.success("successfully deleted movie from favorite list ");
      setFavoritesMovies(FavoritesMovies.filter((m) => m._id!== id));
     
    })
    .catch(err => console.log(err))
   };


  return (
    <div className=" mx-auto container gap-3 my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {FavoritesMovies.map((movie) => {
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
                <strong>Rating: </strong>{" "}
                <FaStar className="text-orange-500 text-xl" /> {movie.rating}/5
              </p>

              <ul className="flex justify-start gap-3">
                <h3 className=" font-semibold">Genres:</h3>
                {movie.genres.map((genre, index) => (
                  <li key={index}>{genre},</li>
                ))}
              </ul>
            </div>
            <button onClick={()=>handelDeleteFavorite(movie._id)} className="btn btn-primary">Delete Favorite</button>
          </div>
        );
      })}
    </div>
  );
}

export default MyFavorites;
