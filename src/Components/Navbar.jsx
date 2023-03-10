import { Cross as Hamburger } from 'hamburger-react'
import '../Styles/Navbar.css'

function Navbar() {
    return (
        <nav>
            <div className="nav-content">
                <div className="left">
                    <strong>aditya</strong> girdhar
                </div>
                <div className="right">
                    <img className='d-toggle' src='https://cdn-icons-png.flaticon.com/512/15/15751.png' alt='dark-mode-toggle'/>
                    <Hamburger size={24}/>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;