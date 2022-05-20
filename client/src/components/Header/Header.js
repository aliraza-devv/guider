import Navbar from '../Navbar/Navbar';
import HeaderTextBox from './HeaderTextBox/HeaderTextBox';
import {Shape} from '../UI/svgComponents/index';

const Header = props => {
    return (
        <div className="main">
            <div className="header">
                <Navbar type='main' />
                <HeaderTextBox />
            </div>
            <Shape />
        </div>
    )
};

export default Header;