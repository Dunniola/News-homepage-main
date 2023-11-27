import '../App.css'
import { useState } from "react";
import Logo from "../assets/images/logo.svg"
import iconClose  from "../assets/images/icon-menu-close.svg";
import  iconOpen  from "../assets/images/icon-menu.svg";

function Navbar() {
  const[click, setClick] = useState(false)
  const[open, setOpen] = useState(true)

  const handleClick = () => {
    
     setClick(!click)
    


  }

  const closeMenuTab = () => {
    setClick(false)
    
    
  }
  return (
    <div>
      <header className="header">
        <div className='Logo'>
        <img src={Logo} alt="" />
        </div>

      <nav className='nav-bar'>
        
        
        <div className='align'>
          <ul className={click ? 'nav-menu' : 'nav-active' }>
          <div className='close-tab' onClick={closeMenuTab}>
          <img src={open ? iconClose  : ""} alt="" />
          </div>
          <li className="nav-links" onClick={closeMenuTab}>
          
          <a href="/">Home</a>
            </li>
            <li className="nav-links" onClick={closeMenuTab}>
            <a href='/New' >New
              </a>
            </li>
            <li className="nav-links" onClick={closeMenuTab}>
              <a href="/Popular">Popular</a>
            </li>
            <li className="nav-links">
              <a href="/Trending" onClick={closeMenuTab}>Trending</a>
            </li>
            <li className="nav-links">
              <a href="Categories" onClick={closeMenuTab}>Categories</a>
            </li>

             
            
          </ul>
          
         
         
          
        </div>
        </nav>
        <div className='checkbtn' onClick={handleClick}>          
        
        <img src={click ? "" : iconOpen} alt="" />
      </div>

      </header>
    </div>
  )
}

export default Navbar
