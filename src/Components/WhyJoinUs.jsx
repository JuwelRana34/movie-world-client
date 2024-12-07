import star from '../../public/images/star.png'
import trust from '../../public/images/trust.png'
import wishlist from '../../public/images/wishlist.png'
import responsive from '../../public/images/responsive.png'

function WhyJoinUs() {
  return (
    <>
    
     <h1 className=" pl-4 font-bold text-3xl capitalize bg-clip-text text-transparent  bg-gradient-to-l from-rose-500 to-orange-500 "> Reasons to join: </h1>
    <div className=" grid grid-cols-1 px-2 my-5 text-lg md:grid-cols-4 w-[80%] md:w-full lg:w-[80%] gap-5 mx-auto">
       
        <div className="bg-gradient-to-bl from-green-500 to-lime-500 border h-28  p-2 rounded-lg relative ">
            <h1 className="font-semibold text-slate-50">Stories tailored to your taste</h1>
            <div className='flex justify-end'>

            <img className=" absolute bottom-2 right-2 w-10" src={star} alt=""  />
            </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-transparent border h-28 p-2 relative rounded-lg  ">
            <h1 className="font-semibold text-slate-50">Cancel or switch plans anytime</h1>
            <div className='flex justify-end'>

            <img className="absolute bottom-2 right-2 w-10" src={trust} alt=""  />
            </div>
        </div>

        <div className="bg-gradient-to-br from-rose-500 to-gray-200 border h-28 p-2 rounded-lg relative ">
            <h1 className="font-semibold text-slate-50">A place just for kids</h1>
            <div className='flex justify-end'>

            <img className="absolute bottom-2 right-2 w-10" src={wishlist} alt=""  />
            </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-gray-200 border h-28 p-2 rounded-lg relative  ">
            <h1 className="font-semibold text-slate-50">For your phone, tablet, laptop and TV</h1>
            <div className='flex justify-end '>

            <img className="absolute bottom-2 right-2 w-10" src={responsive} alt=""  />
            </div>
        </div>

    </div>
    </>
  )
}

export default WhyJoinUs