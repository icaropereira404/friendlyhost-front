import './style.css'
import Logo from '../../assets/image4.png'

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={Logo} />
                <h3>
                    Friendly
                    <span className='host'>
                        Host
                    </span>
                </h3>
            </div>
            <nav className='nav'>
                <ul>
                    <a href="">
                        <li>Home</li>
                    </a>
                    <a href="">
                        <li>Contato</li>
                    </a>
                    <a href="">
                        <li>Sobre nós</li>
                    </a>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
