import { useContext } from "react"
import { recipecontext } from "../context/Recipecontext"
import Card from "../components/Card"
import { nanoid } from "nanoid"


const Recipies = () => {

  const {data}= useContext(recipecontext)
  console.log(data)
  const renderrecipes= data.map((recipe)=>{
    return(
     <Card key={recipe.id} recipe={recipe}/>
    )
  })

  return (
    <div className="flex flex-wrap">{renderrecipes}</div>
  )
}

export default Recipies