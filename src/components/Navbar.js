import { useState } from "react"
import  './Navbar.css'
import logo from '../assets/car-logo.png'


const Navbar = () => {

    const [toggle, setToggle] = useState(false) 
    
      return (
        <div className='navbar'>
            <div className='navbar_contain'>
                <a href='/'>
                    <img
                        src={logo}
                        alt="image"
                        className='logo'
                    />
                </a>
                <div className='nav_list'>
                    <ul>
                        <a href='/' className='nav_item'><li>Home</li></a>
                        <a href='/about' className='nav_item'><li>About</li></a>
                        <a href='/service' className='nav_item'><li>Services</li></a>
                        <a href='/contact' className='nav_item'><li>Contact</li></a>
                    </ul>
                </div>
                {/* hamburger menu */}
                <div className='nav_media'>
                <div className='nav_media_det'>
                    <div id='hamburger'
                      onClick={() => setToggle(prev => !prev)}
                        // onClick={()=> setToggle(prev => !prev)}
                    >
                        <div id={toggle ? 'ones' : 'one'} ></div>
                        <div id={toggle ? 'twos' : 'two'}></div>
                        <div id={toggle ? 'threes' : 'three'}></div>
                    </div>
                </div>
            </div>
            <div className='media_cover'>
              <div className={toggle ? 'nav_media_show' : 'nav_media_hide'}>
                  <ul className='list_contain'>
                      <a onClick={() => setToggle(prevToggle => !prevToggle)}  href='/'><li>Home</li></a>
                      <a onClick={() => setToggle(prevToggle => !prevToggle)} href='/about'><li>About</li></a>
                      <a onClick={() => setToggle(prevToggle => !prevToggle)} href='/service'><li>Services</li></a>
                      <a onClick={() => setToggle(prevToggle => !prevToggle)} href='/contact'><li>Contact</li></a>
                  </ul>
              </div>
            </div>
            </div>
        </div>
      )
    }
    
    export default Navbar