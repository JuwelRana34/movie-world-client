import axios from "axios"
import { useEffect, useState } from "react"
import { GiSandsOfTime } from "react-icons/gi"
import { Link, useParams } from "react-router"
import { Rating } from "react-simple-star-rating"
import doc from '../../public/images/doc.gif'
import video from '../../public/images/video-player.gif'

function DetailsAboutMove() {
 const {id} = useParams()
 const [moviedata, setMovieData] = useState({})
 const [rating, setRating] = useState(0)

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
     <p className="text-gray-600  font-semibold text-lg py-4 flex items-center">
       <span className="font-bold">  </span> Genre: {moviedata.genres} 
      </p>
      <hr  className=" border-gray-500"  />

      
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