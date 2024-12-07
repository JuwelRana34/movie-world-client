
import Carosel from "../Components/Carosel";
import FeaturedMovies from "../Components/FeaturedMovies";
import Newslatter from "../Components/Newslatter";
import WhyJoinUs from "../Components/WhyJoinUs";

function Home() {


 

  return (
    <>
    <Carosel/>
    <div className=" container mx-auto">
      <h1 className=" font-bold pl-6 mt-10 bg-clip-text text-transparent  bg-gradient-to-l from-rose-500 to-orange-500 text-3xl">FeaturedMovies: </h1>
      <FeaturedMovies/>
      <WhyJoinUs/>
      <Newslatter/>
    </div>
    </>
  );
}

export default Home;
