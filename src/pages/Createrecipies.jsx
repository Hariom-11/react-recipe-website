import { useForm } from "react-hook-form"
import { nanoid } from "nanoid"
import { useContext } from "react"
import { recipecontext } from "../context/Recipecontext"
import { toast } from "react-toastify"



const Createrecipies = () => {

    const{
        register,
        handleSubmit,
        reset
    }=useForm()

    const {data, setdata}= useContext(recipecontext)

    const submithandler=(Cdata)=>{
        Cdata.id= nanoid()

        const copydata= [...data]
        copydata.push(Cdata)
        setdata(copydata)
        // console.log(data)
        toast.success("recipe created sucessfully")

        reset()

    }

  return (
    <div>
        <form onSubmit={handleSubmit(submithandler)} className="cre-fom">
            <input 
            {...register('url')} className="border-b block p-2 outline-0" type="url"
            placeholder="enter image url" />
            <input 
            {...register("title")} className="border-b block p-2 outline-0" type="text"
            placeholder=" recipe title" />
            <textarea 
            {...register("desc")} placeholder="description of recipe" className="border-b block p-2 outline-0" >
            </textarea>
            <textarea 
            {...register("ingr")} placeholder="ingridents // use coma to seprate them " className="border-b block p-2 outline-0" >
            </textarea>
            <select className="block border-b p-2 outline-0 " {...register("cat")}>
                <option value="breakfast">breakfast</option>
                <option value="lunch">lunch</option>
                <option value="supper">supper</option>
                <option value="dinner">dinner</option>
            </select>
            <button className="block mt-10 bg-orange-600 py-2 font-bold px-3">save recipe</button>
        </form>
    </div>
  )
}

export default Createrecipies