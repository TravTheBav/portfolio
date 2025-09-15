import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import HomePage from './components/HomePage/HomePage'
import ProjectsPage from './components/ProjectsPage/ProjectsPage'
import ContactPage from './components/ContactPage/ContactPage'
import MobileNav from './components/MobileNav/MobileNav'
import MyBurger from './components/MyBurger/MyBurger'


function App() {
  const [burgerActive, setBurgerActive] = useState(false)

  return (
    <BrowserRouter>
      <MyBurger burgerActive={burgerActive} setBurgerActive={setBurgerActive}/>
      <MobileNav burgerActive={burgerActive} setBurgerActive={setBurgerActive}/>
      <NavBar />
      <main>
        <Routes>
          <Route index path='/' element={<HomePage />}></Route>
          <Route path='/projects' element={<ProjectsPage />}></Route>
          <Route path='/contact' element={<ContactPage />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
