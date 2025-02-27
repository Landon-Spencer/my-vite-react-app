import { Link } from "react-router-dom";
import { useContext } from "react";
import DetailsContext from "./DetailsContext";

export default function Details() {
  const {details} = useContext(DetailsContext)
  const moves = details.moves;

  return (<>
    <div className={`container ${details.types[0].type.name}`}>
      <div className="name-img">
        <h1 id={details.forms[0].name.toUpperCase()}>{details.forms[0].name.toUpperCase()}</h1>
        <img alt={details.forms[0].name.toUpperCase()} src={details.sprites.other.home.front_default} />
      </div>
      <div className="moves">
        <ul>
          {moves.filter((move, i) => i < 18).map((move, i) => <li key={i}>{move.move.name}</li>)}
        </ul>
      </div>
    </div>
    <Link to='/pokemon-demo'><button>Go Back</button></Link>
  </>)
}