import {Link} from 'react-router-dom';

const NavbarLink = props => {
    return (
        <li className='text-white navigation__item'>
            <Link 
            className={`navigation__link ${props.minClass}`}
            onClick={props.onClick}
            to={props.to}>
                {props.children}
            </Link>
        </li>
    );
};

export default NavbarLink;