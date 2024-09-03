
import './App.css'
import Footer from './Components/Shared/Footer/Footer'
import Navbar from './Components/Shared/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <div className='flex flex-col min-h-screen max-w-6xl mx-auto'>
        <div className='flex-grow '>
          <Navbar></Navbar>
          <Outlet></Outlet>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    </>
  )
}

export default App
