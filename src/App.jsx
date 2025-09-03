import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import HomePage from './components/HomePage/HomePage'

function App() {
  return (
    // nav goes here
    <BrowserRouter>
      <main>
        <Routes>
          <Route index path="/" element={<HomePage />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
    // footer goes here
  )
}

export default App
