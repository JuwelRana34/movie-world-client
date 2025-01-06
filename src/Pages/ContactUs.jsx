import Swal from "sweetalert2";
import img from "../../public/images/Call center-cuate.svg";
import { useContext } from "react";
import ThemeContext from "../AuthProvider/ThemeProvider";

function ContactUs() {
  const { theme } = useContext(ThemeContext);
  const handelSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: " message send successfully",
      icon: "success",
      draggable: true,
    });

    e.target.reset();
  };
  return (
    <div >
      <div className={`md:flex ${theme === "dark"? "bg-slate-700 ":'bg-white'}  md:w-8/12 mx-auto my-8 rounded`}>
        <div className="md:w-1/2">
          <img className="w-fit" src={img} alt="" />
        </div>
        <div className="md:w-1/2">
          <div className="flex justify-center items-center  ">
            <div className="w-full max-w-lg  p-4">
              <h2 className={`text-2xl font-bold ${theme === 'dark' && "text-slate-300" }  text-orange-500 mb-4 text-center`}>
                Contact Us
              </h2>
              <p className={`text-gray-600 ${theme === 'dark' && "text-slate-300" } text-sm mb-6 text-center`}>
                We&apos;d love to hear from you! Fill out the form below to get
                in touch.
              </p>

              <form onSubmit={handelSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className={`block text-sm font-medium text-gray-700 mb-1 ${theme === 'dark' && "text-slate-300" }`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your Name"
                    className={`w-full  px-4 py-2 border ${theme === 'dark' ? "bg-slate-600" :'bg-white' }border-gray-300 rounded-md shadow-sm focus:outline-none  focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium text-gray-700 mb-1 ${theme === 'dark' && "text-slate-300" }`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    className="w-full  px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium text-gray-700 mb-1 ${theme === 'dark' && "text-slate-300" }`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    placeholder="Your Message"
                    className="w-full  px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className={`w-full bg-orange-600 text-white font-medium py-2 px-4 rounded-md shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition ${theme === 'dark' && "text-slate-300 bg-slate-900" }`}
                  >
                    Send
                  </button>
                  
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
