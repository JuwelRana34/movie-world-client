import './App.css'
import { Outlet } from 'react-router'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { useContext } from 'react';
import ThemeContext from './AuthProvider/ThemeProvider';
function App() {
  const { theme} = useContext(ThemeContext);
  return (
    <div className={`${theme === "dark" ?" bg-gray-800":"bg-slate-100 "} `}>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default App
