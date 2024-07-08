import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Home from './components/Home'

function App() {
  const [openSidebarToggle, setopenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setopenSidebarToggle(!openSidebarToggle);
  }
  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <Home />
    </div>
  )
}

export default App
