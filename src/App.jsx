import './App.css'
import { Outlet } from 'react-router'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
function App() {

  return (
    <div className='bg-slate-100'>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default App
