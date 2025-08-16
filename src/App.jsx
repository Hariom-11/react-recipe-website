import Mainroutes from "./routes/Mainroutes"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className=" py-10 px-[10%] text-white bg-gray-900 font-thin w-screen h-screen">
      <Navbar/>
      <Mainroutes/>
    </div>
  )
}

export default App