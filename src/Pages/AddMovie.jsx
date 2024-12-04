import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Rating } from "react-simple-star-rating";
function AddMovie() {
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>(
console.log({ ...data, rating })

  )
    
 

  // // Catch Rating value
  // const handleRating = (rate) => {
  //   setRating(rate)

  //   // other logic
  // }

  return (
    <div className="w-[80%] mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:grid grid-cols-1 md:grid-cols-2 gap-5 addmovie"
      >
        <input
          placeholder="movie poster image link"
          className="border p-2 rounded "
          required
          {...register("Poster", { required: true })}
        />

        <input
          placeholder="Movie title"
          className="border p-2 rounded"
          required
          {...register("Title", { required: true })}
        />

        <select {...register("Genre")} className="border p-2 rounded">
          <option value="">Genre</option>
          <option value="comedy">comedy</option>
          <option value="drama">drama</option>
          <option value="horror2021">horror</option>
        </select>

        <input
          placeholder="Duration"
          className="border p-2 rounded"
          required
          {...register("Duration", { required: true })}
        />

        <select {...register("ReleaseYear")} className=" border p-2 rounded">
          <option value="">Year</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>

        <div className="flex items-center font-semibold gap-4">
          <h1>Rating:</h1>
          <Rating
            className="flex"
            initialValue={3}
            onClick={(rate) => setRating(rate)}
            ratingValue={rating}
          />
        </div>

        <textarea
          placeholder="Summary..."
          className="border p-2 rounded col-span-2 "
          required
          {...register("Summary", { required: true })}
        />

        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input
          className="border w-[50%] p-2 rounded hover:cursor-pointer font-semibold bg-rose-500 text-white mx-auto col-span-2 "
          value={"Add Movie"}
          type="submit"
        />
      </form>
    </div>
  );
}

export default AddMovie;
