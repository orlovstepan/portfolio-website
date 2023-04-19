import Header from './Components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import { routes } from './utils/routes'


function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        {routes.map((route, index)=><Route key={index} path={route.path} element={<route.element/>} /> )}
      </Routes>
    </div>
  )
}

export default App


