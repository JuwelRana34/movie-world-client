
import Carosel from "../Components/Carosel";
import FeaturedMovies from "../Components/FeaturedMovies";

function Home() {


 

  return (
    <>
    <Carosel/>
    <div className=" container mx-auto">
      <h1 className=" font-bold text-2xl">FeaturedMovies: </h1>
      <FeaturedMovies/>
    </div>
    </>
  );
}

export default Home;
