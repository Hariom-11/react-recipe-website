import { Routes,Route } from "react-router-dom"
import Home from "../pages/Home"
import Recipies from "../pages/Recipies"
import About from "../pages/About"
import Createrecipies from "../pages/Createrecipies"
import Single from "../pages/Single"
import PageNoteFound from "../pages/PageNoteFound"
import Fav from "../pages/Fav"




const Mainroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/recipies" element={<Recipies/>}/>
        <Route path="/recipies/details/:id" element={<Single/>}/>
        <Route path="/create" element={<Createrecipies/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<PageNoteFound/>}/>
        <Route path="/fav" element={<Fav/>}/>
    </Routes>
  )
}

export default Mainroutes