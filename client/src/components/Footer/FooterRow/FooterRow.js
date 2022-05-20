import Row from '../../UI/Row';
import ContactValue from '../ContactValue/ContactValue';
import {Google, Facebook, Twitter} from '../../../assets/img/index';

const FooterRow = props => {
    return (
        <Row
            column1Content={
                <div className='contacts'>
                    <h3 className='contacts__heading'>Contact Us</h3>
                    <ContactValue 
                        heading='Email:'
                        value='admin@guider.com'
                    />
                    <ContactValue 
                        heading='Phone No.'
                        value='+92 305 9653947'
                    />
                    <ContactValue 
                        heading='Telephone:'
                        value='067-5555-555'
                    />
                </div>
            }
            column2Content={
                <div className="copyrights">
                    <p className="paragraph footer-para">
                        Build by Uzair Ahmad & Design By Ali Raza as a final year project of Comsats University Islamabad, Vehari Campus. <br />
                        Copyright 2022 &copy; Guider.com <br />
                        You are not allowed to use this webpage for both personal and commercial use.
                    </p>
                    <div className="social__media ">
                        <a href="https://www.google.com/" className="social__media--link"><img className="social__media--img" src={Google} alt="Google" /></a>
                        <a href="https://www.google.com/" className="social__media--link"><img className="social__media--img" src={Twitter} alt="Twitter" /></a>
                        <a href="https://www.google.com/" className="social__media--link"><img className="social__media--img" src={Facebook} alt="Facebook" /></a>
                    </div>
            </div>
            }
        />
    );
}

export default FooterRow;