import { useContext, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router"
import { UserContext } from "../AuthProvider/AuthProvider";


function Navbar() {
  const {LogOut ,user, isLoading} =useContext(UserContext)

    const navitems = <>
     <NavLink to={'/'}>
     <li><a>Home</a></li>
     </NavLink>
     <NavLink to={'/AllMovies'}>
     <li><a>All Movies</a></li>
     </NavLink>
     <NavLink to={'/AddMovie'}>
     <li><a>Add Movie</a></li>
     </NavLink>
     <NavLink to={'/MyFavorites'}>
     <li><a>My Favorites</a></li>
     </NavLink>
     <NavLink to={'/Subscribe'}>
     <li><a>Subscribe</a></li>
     </NavLink>
    
    </>

const location = useLocation();
 
useEffect(() => {
  const Titles = {
    "/": "Home | movie-world",
    "/AllMovies": "AllMovies| movie-world",
    "/Login": "Login | movie-world",
    "/AddMovie": "AddMovie | movie-world",
    "/MyFavorites": "MyFavorites | movie-world",
    "/passwordReset": "passwordReset | movie-world",
    "/Register": "Register | movie-world",
  };

  const basePath = location.pathname.split("/")[1]

  document.title = Titles[location.pathname] || Titles[`/${basePath}`] || "movie-world";
}, [location]);


const HandelLogOut = () => {
  LogOut();
};
  return (
    <div className="navbar bg-base-100 container sticky  z-10 mx-auto">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn px-3 btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-lg font-semibold"
        >
          {navitems}
        </ul>
      </div>
      <Link to={'/'} id="wname" className="btn text-transparent bg-clip-text bg-gradient-to-l text-base from-red-500 to-orange-500 btn-ghost px-1 font-bold   md:text-2xl">Movie world</Link>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1  font-semibold">{navitems}</ul>
    </div>

    <div className="navbar-end">

    {user? <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
        <div
          tabIndex={0}
          role="button"
          className="btn mx-2 btn-ghost  md:block btn-circle avatar"
        >
          <div className="   w-full  rounded-full">
            <img alt="userPhoto" src={user?.photoURL || ''} />
          </div>
          
        </div>
      </div> : ''}



      {user ? (
        <button onClick={HandelLogOut} className=" py-2 px-3 rounded-lg bg-rose-500 font-semibold text-white text-xs md:text-base">
          
          LogOut
        </button>
      ) : !isLoading? <>
        <div className=" font-semibold">
        <Link to="/Login" className="py-3 mr-2 px-5 rounded-lg bg-blue-500 text-white text-xs md:text-base">
          login
        </Link>
        <Link to="/Register" className="py-3 px-5 rounded-lg bg-orange-500 text-white text-xs md:text-base">
          register
        </Link>
        </div>
       </> : <>
       <div className="flex w-40 flex-col gap-4">
  <div className="flex items-center gap-4">
    <div className="skeleton h-10 w-10 shrink-0 rounded-full"></div>
    <div className="flex flex-col gap-4">
      <div className="skeleton h-4 w-16"></div>
      <div className="skeleton h-4 w-20"></div>
    </div>
  </div>

</div>
       </>
      
      }

    </div>
  </div>
  )
}

export default Navbar