import { useContext, useState } from "react";
import { UserContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router";


function Login() {
  const { signin} = useContext(UserContext);
  const [loading, setLoading] = useState(false);
const navigate = useNavigate()

    const HandelLogin = (e)=>{
    e.preventDefault()
    const {email, password} = e.target
    signin(email.value, password.value)
    .then((userCredential)=>{
      const user = userCredential.user.email
      console.log(user)
      e.target.reset()
      navigate('/')
    })
    .catch((error)=>{
      console.error("Error signing in:", error);
    })
  }
  return (
    <div className=" flex justify-center items-center mt-20">
      <div className="card bg-base-100 rounded-lg border w-full max-w-sm shrink-0 shadow-md">
        <h1 className=" bg-clip-text text-transparent bg-gradient-to-tr from-red-600 to-purple-500 font-bold text-2xl text-center mt-5">Login</h1>
      <form onSubmit={HandelLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">{
             loading?<span className="loading loading-spinner text-white"></span> :"Login"
            } </button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Login