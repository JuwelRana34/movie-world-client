import { FaFacebook, FaLinkedin } from "react-icons/fa"
import { IoLogoGithub } from "react-icons/io"
import { Link } from "react-router"
import img from '../../public/images/video-player.gif'
import { MdOutlineMailOutline, MdOutlinePhone } from "react-icons/md"
import { FaLocationDot } from "react-icons/fa6"
import { useContext } from "react"
import ThemeContext from '../AuthProvider/ThemeProvider'
function Footer() {
  const {theme} = useContext(ThemeContext)
  return (
    <div  className="mt-10"  style={{
      backgroundImage:theme === "light" &&`url('https://img.freepik.com/premium-vector/abstract-glossy-hexagon-pattern-background_1302-22441.jpg?ga=GA1.1.1974322130.1689523785&semt=ais_hybrid')`  ,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: "no-repeat"
   
    }}  >
    <footer className={`footer mt-5 bg-transparent  ${theme ==="dark"&& "text-gray-400 "} text-gray-500  p-10`}>
    <nav>
      <h6 className="footer-title">Services</h6>
      <a className="">
      Media Center</a>
      <a className="">
      Ways to Watch</a>
      <a className="">Drama</a>
      <a className="">Live stream</a>
    </nav>
    <nav>
      <h6 className="footer-title">Contact us</h6>
      <a className="link link-hover flex items-center gap-2"> <MdOutlinePhone className="text-xl" />01761632836</a>
      <a className="link link-hover flex items-center gap-2"><MdOutlineMailOutline className="text-xl" />juwelrana@gmail.com</a>
      <a className="link link-hover flex items-center gap-2"><FaLocationDot  className="text-xl" />Level-6, 38, Awal Centre, Banani, Dhaka</a>
     
    </nav>
    <nav>
      <h6 className="footer-title">Useful Links</h6>
      <Link to={'ContactUs'} className="link link-hover">ContactUs</Link>
      <Link to={'Subscribe'} className="link link-hover">Subscribe</Link>
      
    </nav>
  </footer>

  <footer className={`footer  bg-transparent  ${theme ==="dark"&& "text-gray-400 "} text-gray-500 items-center p-4`}>


   
  <aside className="grid-flow-col items-center">
    <img src={img} className="w-12" alt=""  />
    <p>Copyright © 2020 - {new Date().getFullYear()} - All right reserved</p>
  </aside>
  
    <h1 id="fname" className="text-2xl font-bold capitalize bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-orange-600">movie world</h1>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
  <Link to='https://www.facebook.com/juwel34/' target="_blank">
        <FaFacebook className={` hover:scale-125 transition-all text-3xl text-blue-600  ${theme ==="dark" && " text-gray-300"} `}/>
      </Link>
      <Link to= "https://www.linkedin.com/in/md-juwel-rana-14b563204/" target="_blank">
      <FaLinkedin className={` hover:scale-125 transition-all text-3xl text-blue-800 ${theme ==="dark" && "text-gray-300"} `}/>
      </Link>
      <Link to="https://github.com/JuwelRana34" target="_blank">
        <IoLogoGithub className={` hover:scale-125 transition-all text-3xl text-gray-300  ${theme ==="light" && "text-gray-800"} `}/>
      </Link>
  </nav>
  

</footer>
</div>
  )
}

export default Footer