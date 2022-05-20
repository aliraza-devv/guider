import {FooterLogo} from '../../assets/img/index';
import FooterRow from './FooterRow/FooterRow';

const Footer = props => {
    return (
        <footer className="footer">
        <div className="footer__logo-box">
            <img src={FooterLogo} alt="Footer Logo" className="footer__logo" />
        </div>
        <FooterRow />
        </footer>
    );
}

export default Footer;