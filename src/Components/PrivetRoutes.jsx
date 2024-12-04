import { useContext } from "react"
import { UserContext } from "../AuthProvider/AuthProvider"
import { Navigate } from "react-router"

function PrivetRoutes({children}) {
   const {user}= useContext(UserContext)

   if(!user){
    return <Navigate to='/Login'/>
   }
  return (
    children
  )
}

export default PrivetRoutes