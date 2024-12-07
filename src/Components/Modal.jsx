import { Rating } from "react-simple-star-rating";

function Modal() {
  return (
    <>
      {/* <div className=" rounded-md shadow "
        style={{
          backgroundImage: `url(${""})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-3xl font-semibold">{''}</h1>
        <div className="text-gray-600 py-4 flex items-center gap-3 text-lg font-semibold">
              Rating:
              <Rating
                count={rating}
                className="flex text-sm"
                initialValue={rating}
                readonly
              /> {`${rating}`/5}
            </div>

            {moviedata?.genres?.map((i, index) => (
                <button className={`rounded-md mx-1 ${index % 2 === 0 ? 'bg-orange-500':'bg-fuchsia-500'}`} key={index}>
                 
                  {i}
                </button>
              ))}

      </div> */}
    </>
  );
}

export default Modal;
