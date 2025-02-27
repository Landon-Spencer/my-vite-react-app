import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";
import DetailsContext from "./DetailsContext";
import './PokemonDemo.css'

export default function PokemonDemo() {
  const [curr, setCurr] = useState('https://pokeapi.co/api/v2/pokemon?limit=9')
  const [nextPage, setnextPage] = useState('')
  const [prevPage, setprevPage] = useState('')
  const [pokeList, setpokeList] = useState([])
  const [details, setDetails] = useState({})
  const value = { details, setDetails }

  function goToNext() {
    setCurr(nextPage)
  }

  function goToPrev() {
    setCurr(prevPage)
  }

  useEffect(() => {
    fetch(curr)
      .then(res => res.json())
      .then(data => {
        setnextPage(data.next)
        setprevPage(data.previous)
        setpokeList(data.results)
      })
  }, [curr])

  return (
    <DetailsContext.Provider value={value}>
      <div className="homepage">
        <div className="navBar">
          <Link to='/pokemon-demo'>
            <button onClick={() => setCurr('https://pokeapi.co/api/v2/pokemon?limit=9')}>
              GO HOME
            </button>
          </Link>
        </div>
        <Routes path='/pokemon-demo'>
          <Route path='/' element={<Home pokeList={pokeList} goToNext={nextPage ? goToNext : null} goToPrev={prevPage ? goToPrev : null} />} />
          <Route path='/details/:name' element={<Details />} />
        </Routes>
      </div>
    </DetailsContext.Provider>
  );
}
