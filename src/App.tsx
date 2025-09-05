
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar.tsx'
import Home from './pages/Home.tsx'



function App() {
 

  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <div className=' bg-secondary'>
        <Home/>
      </div>
      
    </BrowserRouter>
    
    </>
  )
}

export default App
