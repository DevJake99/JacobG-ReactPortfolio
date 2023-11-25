import { Link } from 'react-router-dom'
import './navigation.scss';
import LogoJ from '../../assets/images/logo-j.png'
import SubLogo from '../../assets/images/sub-logo-j.png'

function Navbar() {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoJ} alt='logo'></img>
                <img src={SubLogo} className='sub-logo' alt='Jacob-Garcia'></img>
            </Link>
        </div>

    )
}

export default Navbar;