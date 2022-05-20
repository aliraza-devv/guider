import {Link} from 'react-scroll';

const NavScrollLink = props => {
    return (
        <li className='text-white navigation__item'>
            <Link
                className='navigation__link'
                to={props.id}
                smooth={true}
                duration={500}
            >
                {props.text}
            </Link>
        </li>
    );
}

export default NavScrollLink;