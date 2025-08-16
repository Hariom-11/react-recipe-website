import { Link } from "react-router-dom"


const Card = (props) => {
    const { url, id, title, desc, ingr, cat } = props.recipe
    console.log(id)
    return (
        <Link to={`/recipies/details/${id}`} className=" hover:scale-105 duration-150 block w-[16vw] mr-8 mb-4 mt-15 shadow rounded overflow-hidden">
            <img className="object-cover rounded w-[16] h-[20vh]" src={url} alt="" />
            <h4 className="text-orange-500 ">{cat}</h4>
            <h1 className="font-black">{title}</h1>
            <p>{desc.slice(0, 100)}... <small className="text-red-500">
                more</small></p>
            <p>{ingr}</p>
            
        </Link>
    )
}

export default Card