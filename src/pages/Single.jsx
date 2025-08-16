import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { recipecontext } from '../context/Recipecontext'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

const Single = () => {
  const { data, setdata } = useContext(recipecontext)
  const params = useParams()
  const recipe = data.find((recipe) => params.id == recipe.id)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset
  } = useForm({
    defaultValues: {
      url: recipe.url,
      title: recipe.title,
      desc: recipe.desc,
      ingr: recipe.ingr,
      cat: recipe.cat
    }
  })

  const updatethandler = (recipe) => {
    const index = data.findIndex((recipe) => params.id == recipe.id)
    const copydata = [...data]
    copydata[index] = { ...copydata[index], ...recipe }
    setdata(copydata)
    toast.success("updated sucessfully")
    console.log(copydata)
    // toast
  }




  const deletehandler = () => {
    const filterdata = data.filter((r) => r.id != params.id)
    setdata(filterdata)
    toast.success("deleted successfuly")
    navigate('/recipies')
  }

   useEffect(()=>{
      console.log("single is mounted")
  
      return ()=>{
        console.log("single is unmounted")
      }
    },[])

  return (
    recipe ? <div className='w-full flex'>
  clear    <div className='left w-1/2 p-2'>
        <h1 className='text-2xl font-bold left'>{recipe.title}</h1>
        <img className='h-[25vh]' src={recipe.url} alt="" />
      </div>
      <form onSubmit={handleSubmit(updatehandler)} className="right w-1/2 p-2">
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
        <button className=" mt-10 bg-orange-600 py-2 font-bold px-3">update recipe</button>
        <button onClick={deletehandler} className=" mt-10 ml-5 bg-gray-600 py-2 font-bold px-3">delete recipe</button>
      </form>
    </div> : "Loading..."
  )
}

export default Single