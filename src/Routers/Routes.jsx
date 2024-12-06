import { Routes, Route } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import AllMovies from "../Pages/AllMovies";
import AddMovie from "../Pages/AddMovie";
import MyFavorites from "../Pages/MyFavorites";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivetRoutes from "../Components/PrivetRoutes";
import Notfound from "../Pages/Notfound";
import DetailsAboutMove from "../Components/DetailsAboutMove";
import UpdateMovie from "../Pages/UpdateMovie";

const AppRoute = () => {
  return(
    <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="AllMovies" element={ <PrivetRoutes> <AllMovies /> </PrivetRoutes> } />
      <Route path="AddMovie" element={<PrivetRoutes> <AddMovie /> </PrivetRoutes>} />
      <Route path="MyFavorites" element={<PrivetRoutes><MyFavorites /> </PrivetRoutes> } />
      <Route path="Login" element={<Login />} />
      <Route path="Register" element={<Register />} />
      <Route path="UpdateMovie/:id" element={<PrivetRoutes><UpdateMovie /></PrivetRoutes>} />
      <Route path="detailMovie/:id" element={<PrivetRoutes> < DetailsAboutMove/> </PrivetRoutes>} />
      
     
    </Route>
    <Route path="/*" element={<Notfound/> } />
  </Routes>
  )
}

export default AppRoute;
