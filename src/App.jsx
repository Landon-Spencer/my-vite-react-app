import { Routes, Route, Link, useNavigate} from 'react-router-dom'
import './App.css'
import Template from './Template'
import Dog from './Dog'
import ColorList from './ColorList'

function App() {
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <button onClick={() => navigate('/')}>Template Page</button>
        <button onClick={() => navigate('/dog')}>Random Dog</button>
        <button onClick={() => navigate('/color-list')}>Color List</button>
      </nav>
      <Routes>
        <Route path='/' element={<Template/>}/>
        <Route path='/dog' element={<Dog/>}/>
        <Route path='/color-list' element={<ColorList/>}/>
      </Routes>
    </>
  )
}

export default App
