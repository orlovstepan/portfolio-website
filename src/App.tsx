import Header from './Components/Header/Header'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Projects from './Pages/Projects'
import Profile from './Pages/Profile'
import { useState } from 'react'


const routes = [
  {
    path: '/',
    component: <Home/>
  },
]

function App() {

  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  const toggleDarkTheme = () => {
    setDarkTheme(prev => !prev);
  };

  return (
    <div className="App">
      <Header darkTheme={darkTheme} toggleDarkTheme={toggleDarkTheme} />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
      </Routes>
    </div>
  )
}

export default App


