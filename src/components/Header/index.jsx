import './style.css'
import Logo from '../../assets/image4.png'
import { SlMenu } from 'react-icons/sl'
import { GrClose } from 'react-icons/gr'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    const [menu, setMenu] = useState(false);
    console.log(menu)
    const toogleMenu = () => {
        setMenu(prev => !prev)
    }

    return (
        <header className="header container">
            <div className="logo">
                <img src={Logo} />
                <h3>
                    Friendly
                    <span className='host'>
                        Host
                    </span>
                </h3>
            </div>
            <nav className={menu ? 'nav active' : 'nav'}>
                <ul>
                    <Link to="/" > 
                        <li>Home</li>
                    </Link>
                    <Link to="/about">
                        <li>Sobre nós</li>
                    </Link>
                </ul>
            </nav>
                <div onClick={toogleMenu} className="hamburguer">
                    {!menu ? <SlMenu size={30} /> : <GrClose size={30} /> }
                </div>
        </header>
    )
}

export default Header;
