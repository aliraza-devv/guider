import {Link} from 'react-router-dom';

import {Logo} from '../../../assets/img/index';

const NavbarLogo = () => {
    return (
        <div className="navigation__logo">
            <Link 
                to="/"> 
                    <img 
                        src={Logo} 
                        className='navigation__logo-img'
                        alt='LOGO' /> 
            </Link>
        </div>
    );
};

export default NavbarLogo;