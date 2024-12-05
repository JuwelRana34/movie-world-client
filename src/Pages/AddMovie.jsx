import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "sonner";
import { Rating } from "react-simple-star-rating";
function AddMovie() {
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(0);
  const genres = ["Action", "comedy", "drama", "horror", "Romance"];

  const {
    register,
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) =>{
    setLoading(true)
    

const movieData = { ...data,
   Duration: Number(data.Duration),
   ReleaseYear:Number(data.ReleaseYear),
   Poster: data.Poster,
   rating
   }

   if(movieData.genres.length <= 0 && Array.isArray(movieData.genres) ){
     toast.error('Please select genre');
     return;
   }
   if ( movieData.Duration <= 60 ) {
     toast.error('Duration should be more than 60 minutes');
     return;
   }
   if ( movieData.rating <= 0 ) {
     toast.error('must be select rated');
     return;
   }
   console.log(movieData.ReleaseYear)
   if ( movieData.ReleaseYear === 0 || isNaN(movieData.ReleaseYear) ) {
    toast.warning('Please select a release year');
   }

console.log(movieData)
try{
  const response = await fetch(``,{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movieData),
  })
  if (response.ok) {
    toast.success( 'new movie added successfully');
    setRating(0);
    reset()
    
  }else{
    toast.error('failed to add new movie');
    
  }
}catch(error){
toast.error(error)

} finally{
  setLoading(false)
}


}
    
 

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

        
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2">
        <h3 className="font-semibold text-lg">Select Genres:</h3>
        {genres.map((genre, index) => (
          <div  key={index}>
            <Controller
              name="genres"
              control={control}
              defaultValue={[]}
              render={({ field }) => (
                <label className="flex  flex-row-reverse gap-2 items-center">
                  <input
                    type="checkbox"
                    value={genre}
                    checked={field.value.includes(genre)}
                    onChange={(e) => {
                      const { value, checked } = e.target;
                      const newValue = checked
                        ? [...field.value, value] // Add selected genre
                        : field.value.filter((item) => item !== value); // Remove deselected genre
                      field.onChange(newValue);
                    }}
                  />
                  {genre}
                </label>
              )}
            />
          </div>
        ))}
      </div>


        <input
          placeholder="Duration"
          className="border p-2 rounded"
          required
          type="number"
          {...register("Duration", { required: true , type: "number"})}
        />
        
        <select {...register("ReleaseYear")} className=" border p-2 rounded">
          <option value='year' >Year</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>

        <div className="flex items-center font-semibold gap-4">
          <h1>Rating:</h1>
          <Rating
            className="flex"
            
            onClick={(rate) => setRating(rate)}
            ratingValue={rating}
          />
        </div>

        <textarea
          placeholder="Summary..."
          className="border p-2 rounded col-span-2 "
          required
          {...register("Summary", { required: true, minLength:{
            value: 10,
            message: "Summary should be at least 10 characters long"
          } })}
        />
        {errors.Summary && <p>{errors.Summary.message} </p>}
        
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
