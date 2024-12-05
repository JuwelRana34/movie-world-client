import axios from "axios"
import { useEffect, useState } from "react"

function FeaturedMovies() {
    const [featuredMovies , setFeaturedMovies]= useState([])

    useEffect(()=>{
        const FeaturedMovies = ()=>{
            axios.get('http://localhost:3000/featuredMovies')
            .then(res=>{
                setFeaturedMovies(res.data)
            }).catch( (err)=> console.error(err))
        }
        FeaturedMovies()
    },[])


  return (
    <div className=" mx-auto container gap-3 my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {featuredMovies.map((movie) => {
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
              
              <p>
                <strong>Rating: </strong> {movie.rating}/5
              </p>

              <ul className="flex justify-start gap-3">
                <h3 className=" font-semibold">Genres:</h3>
                {movie.genres.map((genre, index) => (
                  <li key={index}>{genre},</li>
                ))}
              </ul>
            </div>

           <button className="btn  btn-success text-white my-2">See Details</button>
          </div>
        );
      })}
    </div>
  )
}

export default FeaturedMovies