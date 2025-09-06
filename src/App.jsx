import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import NavBar from './components/NavBar/NavBar'
import HomePage from './components/HomePage/HomePage'
import ProjectsPage from './components/ProjectsPage/ProjectsPage'
import ContactPage from './components/ContactPage/ContactPage'


function App() {
  return (
    <BrowserRouter>
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
