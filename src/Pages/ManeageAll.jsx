import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Loading from "./Loading";
import { FaEdit, FaStar } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { toast } from "sonner";
import Swal from "sweetalert2";
import { UserContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router";
import ThemeContext from "../AuthProvider/ThemeProvider";

function ManeageAll() {
  const [movies, setMovies] = useState([]);
  const [loadingdata, setLoadingData] = useState(true);
  const { user } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);


  useEffect(() => {
    const movies = () => {
      axios
        .get(`https://movieworld-ochre.vercel.app/`)
        .then((res) => {
          setMovies(res.data);
          setLoadingData(false);
        })
        .catch((err) => console.log(err));
    };
    movies();
  }, []);

  const handelDelete = (id, title) => {
    if (!user) {
      toast.error("You are not user logged in and continue.");
      return;
    }
    Swal.fire({
      title: `Are you sure want to delete "${title}" movie?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://movieworld-ochre.vercel.app/MoviesDtail/${id}`)
          .then(() => {
            setMovies(movies.filter((m) => m._id !== id));
            Swal.fire({
              title: "Deleted!",
              text: "Your movie has been deleted.",
              icon: "success",
            });
          })
          .catch((err) => toast.error(err));
      }
    });
  };

  if (loadingdata) {
    return <Loading />;
  }

  return (
    <div className="">
      <div>
        <h1 className=" text-3xl font-bold text-orange-500 my-5 text-center"> Manage all movie</h1>
      </div>
      <div className={`overflow-x-auto w-11/12 rounded shadow-sm mx-auto  ${theme === 'dark'?'bg-slate-700' :'bg-white'}  `}>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Poster</th>
              <th>Genres</th>
              <th>Rating</th>
              <th>Action</th>
            </tr>
          </thead>
          {movies?.map((movie) => {
            return (
              <tbody key={movie._id}>
                {/* row 1 */}
                <tr>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask rounded h-12 w-12">
                          <img src={movie.Poster} alt={movie.Title} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{movie.Title}</div>
                        <div className="text-sm opacity-50">
                          {movie.Duration} min
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className=" font-semibold text-blue-500">
                    {movie?.genres?.map((i, index) => (
                      <span className="px-1" key={index}>
                        #{i}
                      </span>
                    ))}
                  </td>
                  <td >
                    <div className="flex items-center gap-2">
                      <FaStar className="text-yellow-500" /> {movie.rating}
                    </div>
                    
                  </td>
                  <th>
                    <div className=" flex items-center space-x-2 space-y-2">
                      <button
                        onClick={() => handelDelete(movie._id, movie.Title)}
                        className=" bg-red-100 rounded text-red-700 btn-md"
                      >
                        <MdDeleteForever className="text-xl" />
                      </button>
                      <Link to={`/UpdateMovie/${movie._id}`}>
                        <button className=" edit rounded bg-yellow-200 text-orange-700 btn-md">
                          <FaEdit />
                        </button>
                      </Link>
                    </div>
                  </th>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default ManeageAll;
