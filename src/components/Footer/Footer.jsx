import React from 'react'
import './Footer.css'


export default function Footer() {
  return (
    <footer>
      <br/>
      <br/>
      <div className='logoo'>
        <a href="https://www.facebook.com/davidantonio.yepescastellanos/?locale=es_LA"  rel="yo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXGIJv4143r98mksyd2PoYhnKqRY1xtRBjtvu_0xU&s" alt="Facebook" />    
        </a>
        <a href="https://www.instagram.com/david_yepes33/"  rel="yo">
        <img src="https://cdn-icons-png.flaticon.com/128/1409/1409946.png" alt="Instagram" />
    </a>
  </div>
      <p className='footername'>&copy; David Antonio Yepes Castellanos</p>
    </footer>
  )
}
