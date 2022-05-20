import NavScrollLink from "./NavScrollLink/NavScrollLink";
import NavbarLink from "./NavLink/NavLink";

import {useAuth0} from '@auth0/auth0-react';

const NavigationLinks = props => {

    const {loginWithPopup, isAuthenticated, user, logout} = useAuth0();

    let navLinks = (
        <ul className="navigation__nav__list">
            <NavbarLink to='/'>Home</NavbarLink>
            {isAuthenticated ? <NavbarLink to='/profile' ><img src={user.picture} className="nav--img" alt="User" /></NavbarLink> : 
                <li onClick={loginWithPopup} className='text-white navigation__item'>
                    <p className='navigation__link'>
                        Work with us
                    </p>
                </li>
            }
            {
                isAuthenticated && <NavbarLink onClick={logout} minClass='u-margin-left-minus' to="/">Logout</NavbarLink>
            }
        </ul>
    );

    if(props.type === 'main') {
        navLinks =(
            <ul className="navigation__nav__list">
                <NavScrollLink id='about' text='About' />
                <NavScrollLink id='services' text='Services' />
                <NavScrollLink id='reviews' text='Reviews' />
                {isAuthenticated ? <NavbarLink to='/profile' ><img src={user.picture} className="nav--img" alt="User" /></NavbarLink> : 
                    <li className='text-white navigation__item'>
                        <p onClick={loginWithPopup} className='navigation__link'>
                            Work with us
                        </p>
                    </li>
                }
                {
                    isAuthenticated && <NavbarLink onClick={logout} minClass='u-margin-left-minus' to="/">Logout</NavbarLink>
                }
            </ul>
        );
    }

    return (
        <div className="navigation__nav">
            <input type="checkbox" id="click" />
            <label htmlFor="click" className="btn--menu">
                <i className="fas fa-bars"></i>
            </label>
            {navLinks}
        </div>
    );
};

export default NavigationLinks;