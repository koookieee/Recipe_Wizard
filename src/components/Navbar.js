import React from 'react'
import "../styles.scss"
import logo from "../download1.png"
const Navbar = () => {
  return (
    <div>
        <nav>
          <img src={logo} alt='logo' className='logod'/>
           <h3 className="logooo"><i>Delicious Delicacy</i></h3>
           
        </nav>
    </div>
  )
}

export default Navbar
