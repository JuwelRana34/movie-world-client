import axios from "axios"
import { useEffect, useState } from "react"

import { Link, useNavigate, useParams } from "react-router"
import { Rating } from "react-simple-star-rating"
import doc from '../../public/images/doc.gif'
import video from '../../public/images/video-player.gif'
import { toast } from "sonner"


function DetailsAboutMove() {
 const {id} = useParams()
 const [moviedata, setMovieData] = useState({})
 const [rating, setRating] = useState(0)
 const navigate = useNavigate()
 useEffect(() =>{
    const movieDetails = ()=>{
        axios.get(`http://localhost:3000/MoviesDtail/${id}`)
        .then(res=>{
            setMovieData(res.data)
            setRating(res.data.rating)
        }).catch(err=> console.log(err))
    }
    movieDetails()
 },[id])

  const handelDelete = (id) => {
   axios.delete(`http://localhost:3000/MoviesDtail/${id}`)
   .then(() =>{
     toast.success("movie deleted successfully");
     navigate("/AllMovies")
   })
   .catch(err => console.log(err))
  };

     
  return (
    <div className="mt-5">

<div className="hero bg-gradient-to-t from-blue-200 to-white  mx-auto container min-h-screen">
  <div className="hero-content w-full gap-5 items-start flex-col lg:flex-row">
    <img
      src={moviedata.Poster}
      className="w-full md:w-[30%] rounded-lg shadow-2xl" />
    <div className="md:w-[70%]  md:px-10">
      <h1 className=" text-4xl md:text-5xl bg-gradient-to-r from-rose-600 to-green-700 bg-clip-text text-transparent  font-bold">{moviedata.Title}</h1>
      <p className="text-gray-600 md:flex gap-2 items-center text-lg py-4"><img className="w-14" src={doc} alt="" /> 
       <span className="font-bold"> summary:  </span> {moviedata.Summary}
      </p>
      
      <hr className=" border-gray-500" />
      <p className="text-gray-600  font-semibold text-lg py-4 flex  gap-2 items-center">
       <span className="font-bold"> <img src={video} alt="" className="w-14"/>   </span> Duration: {moviedata.Duration} minutes
      </p>
     <hr  className=" border-gray-500"  />
     <div className="text-gray-600 py-4 flex items-center gap-3 text-lg font-semibold">
        Rating: <Rating
          count={rating}
          className="flex text-sm"
          initialValue={rating}
          readonly
        />
     </div>
     <hr  className=" border-gray-500"  />
     <p className="text-gray-600  font-semibold text-lg py-4 flex items-center">
       <span className="font-bold">  </span> Release Year: {moviedata.ReleaseYear} 
      </p>
      <hr  className=" border-gray-500"  />
     <p className="text-gray-600 space-x-1  font-semibold text-lg py-4 flex items-center">
       <span className="px-2">Genre:</span>   {moviedata?.genres?.map((i,index) => <p className="" key={index}> {i} , </p>)} 
      </p>
      <hr  className=" border-gray-500 "  />
     <div className="my-4 space-x-2">
        <button onClick={()=>handelDelete(moviedata._id)} className="btn btn-primary">Delete Movie</button>
        <button className="btn btn-primary">Add to Favorite</button>
     </div>
      
    </div>
  </div>
</div>






 <div className="text-center py-10">

        <Link to='/AllMovies' className='py-2 px-5 rounded-md bg-gradient-to-r from-rose-500 to-orange-600 text-white'>See all movies</Link>
 </div>
    </div>
  )
}

export default DetailsAboutMove