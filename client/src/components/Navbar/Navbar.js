import NavbarLogo from "./NavbarLogo/NavbarLogo";
import NavbarLinks from './NavbarLinks/NavbarLinks';

const Navigation = props => {
    return (
        <div className="navigation">
            <NavbarLogo />
            <NavbarLinks type={props.type} />
        </div>
    );
};

export default Navigation;