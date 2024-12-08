import { useContext, useState } from "react";
import { UserContext } from "../AuthProvider/AuthProvider";
import { toast } from "sonner";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";

function Register() {
  const { signUp, SignInWithGoogle, UpdateProfile } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [isvisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const HandelsignUp = (e) => {
    e.preventDefault();
    setLoading(true);
    const { email, password, PhotoUrl, name } = e.target;
    const passwordValidation = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    if (!passwordValidation.test(password.value)) {
      setLoading(false);
      return toast.error(
        "Password should be at least 6 characters long and at least one uppercase letter and one lowercase letter."
      );
    }
    signUp(email.value, password.value)
      .then(() => {
        toast.success("registration successful!");
        setLoading(false);
        UpdateProfile(name.value, PhotoUrl.value);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        toast.error(` ${error}`);
        setLoading(false);
      });
  };

  const HandelSignUpWithGoogle = () => {
    SignInWithGoogle()
     .then(() => {
        toast.success("registration successful!");
        setLoading(false);
        navigate('/')
      })
     .catch((error) => {
        toast.error(` ${error}`);
        setLoading(false);
      });
  }

  const handelPassIcon = () => {
    setIsVisible((icon) => !icon);
  };

  return (
    <>
      <div id="register" className=' py-1  '>
        <div className=" my-10 bg-base-100 border border-gray-600 backdrop-blur-sm  bg-black/40 rounded-lg md:w-1/2 mx-auto p-4">
          <h1 className="text-center text-white my-4 capitalize font-bold text-xl">
            registration
          </h1>
          <form onSubmit={HandelsignUp} className=" space-y-4  gap-5">
            <label className="input border border-gray-500  bg-black/60 input-bordered flex items-center gap-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70 text-gray-400"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                required
                name="name"
                className="grow  placeholder:text-gray-400 text-white "
                placeholder="Type your name"
              />
            </label>
            <label className="input input-bordered flex  border-gray-500  bg-black/60 items-center gap-2 pt-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 opacity-70 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>

              <input
                type="text"
                required
                name="PhotoUrl"
                className="grow placeholder:text-gray-400 text-white"
                placeholder="Type your Photo Url"
              />
            </label>

            <label className="input input-bordered flex  border-gray-500  bg-black/60 items-center gap-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70 text-gray-400"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                required
                className="grow placeholder:text-gray-400  text-white"
                placeholder="Email"
                name="email"
              />
            </label>

            <label className="input input-bordered flex  border-gray-500  bg-black/60 items-center gap-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70 text-gray-400"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type={isvisible ? "text" : "password"}
                className="grow bg-transparent placeholder:text-gray-400  text-white"
                name="password"
                placeholder="Password"
              />
              <div onClick={handelPassIcon}>
                {isvisible ? (
                  <FaRegEye className="text-gray-400" />
                ) : (
                  <FaRegEyeSlash className="text-gray-400" />
                )}
              </div>
            </label>

            <p className=" capitalize text-white font-semibold">
              have you account?{" "}
              <Link to="/Login" className="text-blue-500 ">
                Login
              </Link>
            </p>

            <div className="form-control mt-6">
              <button className="btn border-none opacity-90 bg-gradient-to-l text-white from-rose-500 to-orange-500 ">
                {loading ? (
                  <span className="loading loading-spinner text-white"></span>
                ) : (
                  "Registration"
                )}
              </button>
            </div>
          </form>
          <div className=" w-full  flex justify-center">
            <button
              className=" text-md font-semibold backdrop-blur-lg bg-black/50 border-gray-500 border   text-white capitalize flex  items-center gap-3 rounded-lg my-5 py-2 px-3"
              onClick={HandelSignUpWithGoogle}
            >
              <img
                className="w-7"
                src="https://cdn-icons-png.flaticon.com/128/300/300221.png"
                alt=""
              />
              continue with google
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
