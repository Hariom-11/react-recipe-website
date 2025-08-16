import { NavLink } from "react-router-dom"
const Navbar = () => {
  return (
    <div className=" flex text-[1.5rem] justify-center gap-x-10  ">
        <NavLink className={(e)=>e.isActive? 'text-orange-600':"text-white" } to='/'>Home</NavLink>
        <NavLink className={(e)=>e.isActive? 'text-orange-600':"text-white" } to='/recipies'>Recipies</NavLink>
        <NavLink className={(e)=>e.isActive? 'text-orange-600':"text-white" } to='/about'>About</NavLink>
        <NavLink className={(e)=>e.isActive? 'text-orange-600':"text-white" } to='/create'>Create Recipies</NavLink>
    </div>
  )
}

export default Navbar