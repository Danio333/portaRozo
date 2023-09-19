import './Header.css'
import { Navbar }from '../Navbar/Navbar'

export const Header = ()  => {
    return(
        <header>
            <div id='h'>
                <h1 className='Titulo'>Portafolio</h1>
            </div>
            <div id='enlaces'>
                <Navbar com='Home' path="/" />
                <Navbar com='About' path='About'/>
                <Navbar com='Market' path='Shop'/>
            </div>
        </header>
     
    )
}

export default Header
