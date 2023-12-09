import { Link, NavLink } from 'react-router-dom'
import './header.scss';
import LogoJ from '../../assets/images/logo-j.png'
import SubLogo from '../../assets/images/sub-logo-j.png'
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


function Navbar() {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoJ} className='big-j' alt='logo'></img>
                <img src={SubLogo} className='sub-logo' alt='Jacob-Garcia'></img>
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/" >
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e'  ></FontAwesomeIcon>
                </NavLink>
                <NavLink exact="true" activeclassname="active" to="/about" className='about-link'>
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e'  ></FontAwesomeIcon>
                </NavLink>
                <NavLink exact="true" activeclassname="active" to="/contact" className='contact-link'>
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'  ></FontAwesomeIcon>
                </NavLink>
            </nav>
            <ul className='footer'>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/jacob-garcia-7a59621b8/'>
                        <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://github.com/devjake99'>
                        <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                    </a>
                </li>
            </ul>
        </div>

    )
}

export default Navbar;