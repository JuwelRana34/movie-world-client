import { useContext, useEffect, useState } from "react";
import { UserContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import { toast } from "sonner";
import Loading from "./Loading";
import { Rating } from "react-simple-star-rating";
import Swal from "sweetalert2";

function MyFavorites() {
  const { user } = useContext(UserContext);
  const [FavoritesMovies, setFavoritesMovies] = useState([]);
  const [loadingdata, setLoadingdata] = useState(true);

  useEffect(() => {
    axios
      .get(`https://movieworld-ochre.vercel.app/favoriteMovies`)
      .then(({ data }) => {
        const MyFavoritesMovie = data.filter(
          (move) => move.email === user.email
        );
        setFavoritesMovies(MyFavoritesMovie);
        setLoadingdata(false);
      })
      .catch((error) => console.error(error));
  }, [user.email]);

  const handelDeleteFavorite = (id) => {
    Swal.fire({
      title: "Are you sure delete movie from favorite ?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://movieworld-ochre.vercel.app/favoriteMoveDelete/${id}`
          )
          .then(({ data }) => {
            console.log(data);
            Swal.fire({
              title: "Deleted!",
              text: `Your movie has been deleted from favorite.`,
              icon: "success",
            });

            setFavoritesMovies(FavoritesMovies.filter((m) => m._id !== id));
          })
          .catch((err) => toast.error(err));
      }
    });
  };

  if (loadingdata) {
    return <Loading />;
  }

  return (
    <div className=" mx-auto container gap-3 px-2 my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {FavoritesMovies.length == 0 ? (
        <h1 className="text-3xl font-semibold text-gray-500 text-center">
          No Favorites Available😥
        </h1>
      ) : (
        <>
          {FavoritesMovies.map((movie) => {
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
                <div>
                  <div className="bg-gradient-to-t  w-full h-full from-black to-transparent absolute bottom-0 pl-2 left-0 flex flex-col justify-end">
                    <h1 className="text-2xl capitalize font-semibold">
                      {movie.Title}
                    </h1>
                    <p className="font-semibold">
                      Release Year: {movie.ReleaseYear}
                    </p>
                    <p className="font-semibold">
                      Duration: {movie.Duration} minutes
                    </p>
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
                      <span className=" font-semibold">genres:</span>{" "}
                      {movie?.genres?.map((i, index) => (
                        <span className="px-1" key={index}>
                          #{i}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => handelDeleteFavorite(movie._id)}
                      className={`rounded-md font-semibold w-fit  mx-1 px-3 py-2 my-3  bg-rose-600/90`}
                    >
                      Delete Favorite
                    </button>
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

export default MyFavorites;
