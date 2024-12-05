import { useContext, useState } from "react";
import { useForm} from "react-hook-form";
import { toast } from "sonner";
import { Rating } from "react-simple-star-rating";
import Select from 'react-select';
import { UserContext } from '../AuthProvider/AuthProvider'

const genres = [
  { value: 'Action', label: 'Action' },
  { value: 'comedy', label: 'comedy' },
  { value: 'drama', label: 'drama' },
  { value: 'horror', label: 'horror' },
  { value: 'Romance', label: 'Romance' },
];
function AddMovie() {
  const { user} = useContext(UserContext);

  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(0);
  const [selectedOption, setSelectedOption] = useState([]);
 ;
 const genreValues = selectedOption.map((option) => option.value);
 

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) =>{
    setLoading(true)
    

const movieData = { ...data,
   Duration: Number(data.Duration),
   ReleaseYear:Number(data.ReleaseYear),
   Poster: data.Poster,
   rating,
   genres: genreValues,
   email: user.email
   }

   if (!movieData.Poster || !/^https?:\/\/.+\..+/.test(movieData.Poster)) {
     toast.error('Please provide a valid poster URL');
     return;
   }

   if(Array.isArray(movieData.genres) && movieData.genres.length <= 0   ){
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

   if ( isNaN(movieData.ReleaseYear) || movieData.ReleaseYear === 0 ) {
    toast.warning('Please select a release year');
    return;
   }



try{
  const response = await fetch(`http://localhost:3000/addmovie`,{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movieData),
  })
  if (response.ok) {
    toast.success( 'new movie added successfully');
    setSelectedOption([]); // Reset the genre selection
    setRating(0);
    reset()
    
  }
}catch(error){
toast.error(error)
toast.error(`${error} - failed to add new movie`);
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
    <div className="w-[80%] mt-8 mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:grid grid-cols-1 items-center md:grid-cols-2 gap-5 addmovie"
      >
        <input
          placeholder="movie poster image link"
          className="border p-2 rounded "
          required
          
          {...register("Poster", { required: true })}
        />
        <div>
           <input
          placeholder="Movie title"
          className="border p-2 rounded"
          required
          {...register("Title", { required: true , minLength: {
            value: 2,
            message: "Summary should be at least 2 characters long!",
          }, })}
       
        />
         {errors.Title && <p className="text-orange-500">{errors.Title.message}</p> }
        </div>
       

        <Select
          // defaultValue={[genres[1], genres[3]]}
          isMulti
          name="genres"
          value={selectedOption}
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
          type="number"
          {...register("Duration", { required: true, type: "number" })}
        />

        <select {...register("ReleaseYear")} className=" border p-2 rounded">
          <option value="year">Year</option>
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
          {...register("Summary", {
            required: true,
            minLength: {
              value: 10,
              message: "Summary should be at least 10 characters long",
            },
          })}
        />
        {errors.Summary && <p className="text-orange-500">{errors.Summary.message} </p>}

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
