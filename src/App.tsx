import Header from './Components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import { createContext, useState } from 'react'
import { routes } from './utils/routes'

export const ThemeContext = createContext<string | null>(null);


function App() {

  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  const toggleDarkTheme = () => {
    setDarkTheme(prev => !prev);
  };

  return (
    <div className="App">
      <Header darkTheme={darkTheme} toggleDarkTheme={toggleDarkTheme} />
      <Routes>
        {routes.map((route, index)=><Route key={index} path={route.path} element={<route.element/>} /> )}
      </Routes>
    </div>
  )
}

export default App


