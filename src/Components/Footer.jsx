import { FaFacebook, FaLinkedin } from "react-icons/fa"
import { IoLogoGithub } from "react-icons/io"
import { Link } from "react-router"
import img from '../../public/images/video-player.gif'
import { MdOutlineMailOutline, MdOutlinePhone } from "react-icons/md"

function Footer() {
  return (
    <div id='footer'>
    <footer className="footer bg-transparent text-gray-600  p-10">
    <nav>
      <h6 className="footer-title">Services</h6>
      <a className="link link-hover">
      Media Center</a>
      <a className="link link-hover">
      Ways to Watch</a>
      <a className="link link-hover">Drama</a>
      <a className="link link-hover">Live stream</a>
    </nav>
    <nav>
      <h6 className="footer-title">Contact us</h6>
      <a className="link link-hover flex items-center gap-2"> <MdOutlinePhone className="text-xl" />01761632836</a>
      <a className="link link-hover flex items-center gap-2"><MdOutlineMailOutline className="text-xl" />juwelrana@gmail.com</a>
     
    </nav>
    <nav>
      <h6 className="footer-title">Legal</h6>
      <a className="link link-hover">Terms of use</a>
      <a className="link link-hover">Privacy policy</a>
      <a className="link link-hover">Cookie policy</a>
    </nav>
  </footer>

  <footer className="footer  bg-transparent text-gray-600 items-center p-4">


   
  <aside className="grid-flow-col items-center">
    <img src={img} className="w-12" alt=""  />
    <p>Copyright © 2020 - {new Date().getFullYear()} - All right reserved</p>
  </aside>
  
    <h1 id="fname" className="text-2xl font-bold capitalize bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-orange-600">movie world</h1>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
  <Link to='https://www.facebook.com/juwel34/' target="_blank">
        <FaFacebook className=" hover:scale-125 transition-all text-3xl text-blue-600"/>
      </Link>
      <Link to= "https://www.linkedin.com/in/md-juwel-rana-14b563204/" target="_blank">
      <FaLinkedin className=" hover:scale-125 transition-all text-3xl text-blue-800"/>
      </Link>
      <Link to="https://github.com/JuwelRana34" target="_blank">
        <IoLogoGithub className=" hover:scale-125 transition-all text-3xl text-gray-800 "/>
      </Link>
  </nav>
  

</footer>
</div>
  )
}

export default Footer