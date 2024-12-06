import { FaCheckDouble } from "react-icons/fa";
import Swal from "sweetalert2";
function Subscribe() {
  const handelmodal= (p)=>{
    Swal.fire({
        title: `Are you sure! want to buy ${p}  package?`,
      
        showCancelButton: true,
        confirmButtonText: "yes",
      
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire(`You have successfully buy ${p} !`, "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
}
return (
<div className="grid mt-10 grid-cols-1 md:grid-cols-3 gap-5 px-4 md:px-10">

  <div className="py-8 bg-gradient-to-br from-blue-400 to-fuchsia-500 text-white w-fit border mx-auto px-4 rounded-md">
   
    <h1 className=" flex flex-col justify-center text-center my-4 font-bold text-xl">
      Mobile
      <span>480p </span>
    </h1>
    <div className=" mt-10 space-y-3">
      <div className=" font-semibold gap-2">

      <h1 className="flex items-center gap-2"><FaCheckDouble className="text-white text-lg" /> 
        Monthly price  </h1>
        <span className="font-normal pl-6"> $2.99 </span>
      </div>
      <hr />
      <div className=" font-semibold gap-2">
      <h1 className="flex items-center gap-2"><FaCheckDouble className="text-white text-lg" /> 
      Video  quality:  </h1>
        <span className="font-normal pl-6">Fair </span>
      </div>

      <hr />
      <div className="font-semibold gap-2">
       
      <h1 className="flex items-center gap-2"><FaCheckDouble className="text-white text-lg" /> 
      Resolution: </h1>
        <span className="font-normal pl-6">480p </span>
      </div>

      <hr />
      <div className=" font-semibold gap-2">
      <h1 className="flex items-center gap-2"><FaCheckDouble className="text-white text-lg" /> 
       Supported devices:</h1> 
        <span className="font-normal pl-6">Mobile phone, tablet </span>
      </div>

      <hr />
      <div className="font-semibold  gap-2">
      <h1 className="flex items-center gap-2"><FaCheckDouble className="text-white text-lg" /> 
       Devices your household can watch at the same time:</h1>
        
        
        <span className="font-normal pl-6">  1</span>
      </div>
      <hr />
      <div className="text-center">
        <button onClick={()=>handelmodal("basic")} className=" mx-auto my-5 py-2 px-3 rounded-full  bg-white text-gray-800 font-semibold">
          subscribe now
        </button>
      </div>
    </div>
  </div>

  <div className="py-8 bg-gradient-to-br from-blue-400 to-fuchsia-500 text-white w-fit border mx-auto px-4 rounded-md">
    
    <h1 className=" flex flex-col justify-center text-center my-4 font-bold text-xl">
      standard
      <span>1080p </span>
    </h1>
    <div className=" mt-10 space-y-3">
      <div className=" font-semibold gap-2">

      <h1 className="flex items-center gap-2"><FaCheckDouble className="text-white text-lg" /> 
        Monthly price  </h1>
        <span className="font-normal pl-6"> $7.99 </span>
      </div>
      <hr />
      <div className=" font-semibold gap-2">
      <h1 className="flex items-center gap-2"><FaCheckDouble className="text-white text-lg" /> 
      Video  quality:  </h1>
        <span className="font-normal pl-6">great </span>
      </div>

      <hr />
      <div className="font-semibold gap-2">
       
      <h1 className="flex items-center gap-2"><FaCheckDouble className="text-white text-lg" /> 
      Resolution: </h1>
        <span className="font-normal pl-6">1080p (Full HD) </span>
      </div>

      <hr />
      <div className=" font-semibold gap-2">
      <h1 className="flex items-center gap-2"><FaCheckDouble className="text-white text-lg" /> 
       Supported devices:</h1> 
        <span className="font-normal pl-6">TV, computer, mobile phone, tablet </span>
      </div>

      <hr />
      <div className="font-semibold  gap-2">
      <h1 className="flex items-center gap-2"><FaCheckDouble className="text-white text-lg" /> 
       Devices your household can watch at the same time:</h1>
        
        
        <span className="font-normal pl-6"> 2</span>
      </div>
      <hr />
      <div className="text-center">
        <button onClick={()=>handelmodal('standard')} className=" mx-auto my-5 py-2 px-3 rounded-full  bg-white text-gray-800 font-semibold">
          subscribe now
        </button>
      </div>
    </div>
  </div>


  <div className="py-8 bg-gradient-to-br from-blue-400 to-fuchsia-500 text-white w-fit border mx-auto px-4 rounded-md">
   
    <h1 className=" flex flex-col justify-center text-center my-4 font-bold text-xl">
    Premium
      <span>4K + HDR </span>
    </h1>

    <div className=" mt-10 space-y-3">
      <div className=" font-semibold gap-2">

      <h1 className="flex items-center gap-2"><FaCheckDouble className="text-white text-lg" /> 
        Monthly price  </h1>
        <span className="font-normal pl-6"> $9.99 </span>
      </div>
      <hr />
      <div className=" font-semibold gap-2">
      <h1 className="flex items-center gap-2"><FaCheckDouble className="text-white text-lg" /> 
      Video  quality:  </h1>
        <span className="font-normal pl-6">best </span>
      </div>

      <hr />
      <div className="font-semibold gap-2">
       
      <h1 className="flex items-center gap-2"><FaCheckDouble className="text-white text-lg" /> 
      Resolution: </h1>
        <span className="font-normal pl-6">4K (Ultra HD) + HDR </span>
      </div>

      <hr />
      <div className=" font-semibold gap-2">
      <h1 className="flex items-center gap-2"><FaCheckDouble className="text-white text-lg" /> 
       Supported devices:</h1> 
        <span className="font-normal pl-6">Mobile phone, tablet </span>
      </div>

      <hr />
      <div className="font-semibold  gap-2">
      <h1 className="flex items-center gap-2"><FaCheckDouble className="text-white text-lg" /> 
       Devices your household can watch at the same time:</h1>
        
        
        <span className="font-normal pl-6"> 4</span>
      </div>
      <hr />
      <div className="text-center">
        <button onClick={()=>handelmodal('Premium')} className=" mx-auto my-5 py-2 px-3 rounded-full  bg-white text-gray-800 font-semibold">
          subscribe now
        </button>
      </div>
    </div>
  </div>

 
</div>
);
}

export default Subscribe