import { useContext } from "react"
import { recipecontext } from "../context/Recipecontext"
import Card from "../components/Card"
import { nanoid } from "nanoid"

const Fav = () => {
  const favrate = JSON.parse(localStorage.getItem('fav') || [])

  const renderrecipes = favrate.map((recipe) => {
    return (
      <Card key={recipe.id} recipe={recipe} />
    )
  })

  return (
    <div className="flex flex-wrap">
      {favrate.length > 0 ? renderrecipes : "nothing is fav!"}</div>
  )
}
export default Fav




