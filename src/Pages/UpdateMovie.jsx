import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Rating } from "react-simple-star-rating";
import Select from "react-select";
import { UserContext } from "../AuthProvider/AuthProvider";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import Loading from "./Loading";

const genres = [
  { value: "Action", label: "Action" },
  { value: "comedy", label: "comedy" },
  { value: "drama", label: "drama" },
  { value: "horror", label: "horror" },
  { value: "Romance", label: "Romance" },
];

const years=[
  { value: 2021, label: '2021' },
  { value: 2022, label: '2022' },
  { value: 2023, label: '2023' },
  { value: 2024, label: '2024' },
 
]

function UpdateMovie() {
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const [movieData, setMovieData] = useState();
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(0);
  const [ReleaseYear, setReleaseYear]= useState() 
  const [selectedOption, setSelectedOption] = useState([]);
  const navigate = useNavigate();
  let genreValues = selectedOption.map((option) => option.value);



  useEffect(() => {
    const updatedMovieData = () => {
      if (!id) return;
      axios
        .get(`https://movieworld-ochre.vercel.app/MoviesDtail/${id}`)
        .then((res) => {
          setMovieData(res.data);
          setRating(res.data.rating);
          setReleaseYear(res.data.ReleaseYear)
          if (res.data.genres) {
            setSelectedOption(
              res.data.genres.map((genre) => ({
                value: genre,
                label: genre,
              }))
            );
            
          }
        })
        .catch((err) => console.log(err));
    };
    updatedMovieData();
  }, [id]);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);

    const movieData = {
      ...data,
      Duration: Number(data.Duration),
      ReleaseYear: Number(ReleaseYear),
      Poster: data.Poster,
      rating,
      genres: genreValues,
      email: user.email,
    };


    if (!movieData.Poster || !/^https?:\/\/.+\..+/.test(movieData.Poster)) {
      toast.error("Please provide a valid poster URL");
      setLoading(false);
      return;
    }

    if (!Array.isArray(movieData.genres) || movieData.genres.length <= 0 ) {
      toast.error("Please select genre");
      setLoading(false);
      return;
    }
    if ( isNaN(movieData.Duration) || movieData.Duration <= 60 ) {
      toast.error("Duration should be more than 60 minutes");
      setLoading(false);
      return;
    }
    if (movieData.rating <= 0 && isNaN(movieData.rating)) {
      toast.error("must be select rated");
      setLoading(false);
      return;
    }

    if (isNaN(movieData.ReleaseYear) || movieData.ReleaseYear === 0) {
      toast.warning("Please select a release year");
      setLoading(false);
      return;
    }

    await axios
      .patch(`https://movieworld-ochre.vercel.app/updateMovie/${id}`, movieData)
      .then((res) => {
        toast.success("movie updated successfully");
        setSelectedOption([]);
        setRating(0);
        reset();
        setLoading(false);
        console.log(res.data);
        navigate("/AllMovies");
      })
      .catch((e) => toast.error(e.message));
  };

  if (!movieData) {
    return <Loading></Loading>;
  }

  return (
    <div className="w-[80%] mt-8 mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:grid grid-cols-1 items-center md:grid-cols-2 gap-5 addmovie"
      >
        <input
          placeholder="movie poster image link"
          className="border p-2 rounded "
          required
          defaultValue={movieData?.Poster}
          {...register("Poster")}
        />
        <div>
          <input
            placeholder="Movie title"
            className="border p-2 rounded"
            required
            defaultValue={movieData?.Title}
            {...register("Title", {
              minLength: {
                value: 2,
                message: "Title should be at least 2 characters long!",
              },
            })}
          />
          {errors.Title && (
            <p className="text-orange-500">{errors.Title.message}</p>
          )}
        </div>

        <Select
          defaultValue={movieData?.genres.map((genre) => ({
            value: genre,
            label: genre,
          }))}
          isMulti
          name="genres"
          options={genres}
          onChange={(options) => setSelectedOption(options)}
          className="basic-multi-select"
          classNamePrefix="select"
          placeholder="Select genre..."
        />

        

        <input
          placeholder="Duration"
          className="border p-2 rounded"
          required
          defaultValue={movieData?.Duration}
          type="number"
          {...register("Duration", { required: true, type: "number" })}
        />

        {/* <select {...register("ReleaseYear")} className=" border p-2 rounded">
          <option value="year">Year</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select> */}

<Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={ years.find(year=> year.value === movieData?.ReleaseYear)  }
        onChange={(year) => setReleaseYear(year.value)}
        name="year"
        options={years}
      />

        <div className="flex items-center font-semibold gap-4">
          <h1>Rating:</h1>
          <Rating
            className="flex"
            initialValue={movieData?.rating}
            onClick={(rate) => setRating(rate)}
            ratingValue={rating}
          />
        </div>

        <textarea
          placeholder="Summary..."
          className="border p-2 rounded col-span-2 "
          required
          defaultValue={movieData?.Summary}
          {...register("Summary", {
            required: true,
            minLength: {
              value: 10,
              message: "Summary should be at least 10 characters long",
            },
          })}
        />
        {errors.Summary && (
          <p className="text-orange-500">{errors.Summary.message} </p>
        )}

        <button
          className="border w-full mb-5 p-2 rounded hover:cursor-pointer font-semibold bg-rose-500 text-white mx-auto col-span-2 "
          type="submit"
        >
          {loading ? (
            <span className="loading loading-spinner text-white"></span>
          ) : (
            "Update Movie"
          )}
        </button>
      </form>
    </div>
  );
}

export default UpdateMovie;
