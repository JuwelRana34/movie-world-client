import { useContext, useState } from "react";
import { UserContext } from "../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { toast } from "sonner";

function Login() {
  const { signin, SignInWithGoogle } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [isvisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const HandelLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    const { email, password } = e.target;
    signin(email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user.email;
        console.log(user);
        e.target.reset();
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing in:", error);
        setLoading(false);
      });
  };
  const HandelGoogleLogin = () => {
    SignInWithGoogle()
      .then(() => {
        toast.success("login successful");
      })
      .catch((err) => {
        toast.error(`${err}`);
      });
  };

  const handelPassIcon = () => {
    setIsVisible((icon) => !icon);
  };
  return (
    <div className="py-12 bg-blend-overlay bg-black/30 bg-[url('../../public/images/login.jpg')] object-cover object-center">
      <div className="  flex justify-center items-center mt-10">
        <div className="card bg-base-100 backdrop-blur-sm bg-black/50  rounded-lg border border-gray-500 w-full max-w-sm shrink-0 shadow-md">
          <h1 className=" bg-clip-text text-transparent bg-gradient-to-tr from-gray-200 to-white font-bold text-3xl text-center mt-5">
            Login
          </h1>
          <form onSubmit={HandelLogin} className="card-body">
            <label className="input input-bordered bg-black/60 border border-gray-500 mb-4 flex items-center gap-2">
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
                className="grow placeholder:text-gray-400 text-white"
                name="email"
                placeholder="Email"
              />
            </label>

            <label className="input bg-black/60 border border-gray-500  input-bordered flex items-center gap-2">
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
                required
                className="grow placeholder:text-gray-400 text-white"
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

            <div>
              <Link to={"/"} className="   text-blue-500">
                {" "}
                Forget Password?
              </Link>
            </div>

            <button className="btn border-none hover:bg-rose-500 bg-rose-600 text-white block w-full mx-auto">
              {loading ? (
                <span className="loading loading-spinner text-white"></span>
              ) : (
                "Login"
              )}
            </button>
          </form>
          <div className=" w-full  flex justify-center">
            <button
              className="border text-md  font-semibold text-gray-400 bg-black/60 border-gray-500 capitalize flex  items-center gap-3 rounded-lg my-2 py-2 px-3"
              onClick={HandelGoogleLogin}
            >
              <img
                className="w-7"
                src="https://cdn-icons-png.flaticon.com/128/300/300221.png"
                alt=""
              />
              login with google{" "}
            </button>
          </div>

          <p className=" mb-5 text-white capitalize text-center font-semibold">
            you have&apos;t account?{" "}
            <Link to="/Register" className="text-blue-500 ">
              registration
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
