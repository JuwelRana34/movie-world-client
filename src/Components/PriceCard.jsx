/* eslint-disable react/prop-types */

import Swal from "sweetalert2";


function PriceCard({title ,support, price, plan , devices, resolution }) {

    const handelmodal = (p) => {
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
      };
  return (
    <div className=" w-full bg-white border border-gray-200 rounded-lg shadow-lg p-6">
    <h1 className="text-2xl font-bold text-gray-800 text-center">{plan}</h1>
    <p className="mt-2 text-sm text-gray-600 text-center">
      {title}
    </p>
    <div className="mt-6 text-center">
      <span className="text-4xl font-extrabold text-gray-800">${price}</span>
      <span className="text-lg text-gray-500">/month</span>
    </div>
    <ul className="mt-6 space-y-3">
      <li className="flex items-center">
        <svg
          className="w-5 h-5 text-green-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span className="ml-3 text-gray-700">{devices}</span>
      </li>
      <li className="flex items-center">
        <svg
          className="w-5 h-5 text-green-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span className="ml-3 text-gray-700">resolution: {resolution}</span>
      </li>
      <li className="flex items-center">
        <svg
          className="w-5 h-5 text-green-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span className="ml-3 text-gray-700">Advanced Analytics</span>
      </li>
      <li className="flex items-center">
        <svg
          className="w-5 h-5 text-green-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span className="ml-3 text-gray-700">support: {support}</span>
      </li>
    </ul>
    <button
      onClick={() => handelmodal(plan)}
    className="w-full mt-6 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
      Subscribe Now
    </button>
    <p className="mt-4 text-xs text-gray-500 text-center">
      Cancel anytime. No questions asked.
    </p>
    </div>
  )
}

export default PriceCard