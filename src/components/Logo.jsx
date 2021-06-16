import './Logo.css'
import logo from '../resources/images/logo.png'

const Logo = (props) => {
    return (
        <div>
            <img className='logo-img' src={logo} alt='logo'/>
        </div>
    );
}

export default Logo;