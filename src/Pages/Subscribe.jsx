import PriceCard from "../Components/PriceCard";
function Subscribe() {
  return (
    <>
      {/* new card  */}
      <h1
         className="text-3xl my-10 text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">
          Choose Your Plan  
      
      </h1>

      <div className="grid  grid-cols-1 md:grid-cols-3 gap-5 justify-items-center justify-center mx-auto my-5 w-3/4   ">
        <PriceCard
          plan={"Basic"}
          title={"480p "}
          price={"50"}
          devices={"Max 1 device"}
          resolution={"480p "}
          support={"7 days"}
        />
        <PriceCard
          plan={"standard"}
          title={"1080p"}
          price={"120"}
          devices={"Upto 3 device"}
          resolution={"1080p"}
          support={"15 days"}
        />
        <PriceCard
          plan={"Premium"}
          title={"4K + HDR"}
          price={"399"}
          devices={"unlimited device"}
          resolution={"4k hd"}
          support={"unlimited "}
        />
      </div>
    </>
  );
}

export default Subscribe;
