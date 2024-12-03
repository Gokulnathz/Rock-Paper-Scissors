

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Game from './pages/Game'
import './bootstrap.min.css'

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/play' element={<Game/>}></Route>
        <Route path='/*' element={<Home/>}></Route>
      </Routes>
    </>
  )
}

export default App
