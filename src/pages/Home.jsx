
import { useEffect } from "react"
import axios from "../utils/Axios"


const Home = () => {
  const getdata =async ()=>{
      try{
      const {data}= await axios.get('/products/2')
        console.log(data)
    }
    catch(error){
      console.log(error);
      
    }
  }

  useEffect(()=>{
    console.log("Home is mounted")

    return ()=>{
      console.log("Home is unmounted")
    }
  })

  return (
    <div>let's goo
    <button className="block" onClick={getdata}>on click</button>
  </div>
  )
}

export default Home