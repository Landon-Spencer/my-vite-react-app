import { useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import DetailsContext from "./DetailsContext";

export default function Pokemon({pokeData}){
  const [details, setdetails] = useState({})
  const [pokeSprite, setpokeSprite] = useState(null)
  const [type, setType] = useState('')
  const {setDetails} = useContext(DetailsContext)

  useEffect(() => {
    fetch(pokeData.url)
    .then(res => res.json())
    .then(data => {
      setdetails(data)
      setpokeSprite(data.sprites.other.home.front_default)
      setType(data.types[0].type.name)
    })
  },[])

    return (
    <>
      <div className={`pokeman ${type}`}>
        <h2 className="listName">{pokeData.name}</h2>
        <Link to={`/pokemon-demo/details/${pokeData.name}`} details={details}>
          <img className="onlymon" key={pokeData.name} alt={pokeData.name} src={pokeSprite}
            onClick={() => setDetails(details)
            }/>
        </Link>
      </div>
    </>
  )
}