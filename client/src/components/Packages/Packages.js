import {useNavigate} from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Link from '@material-ui/icons/Link';


import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import HeadingSecondary from '../UI/HeadingSecondary';

const Packages = props => {

    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <main id="services">
            <section className='section-services height-main'>
                <div className='heading-box'>
                    <ArrowBackIcon style={{fill: "#23752d", fontSize: '30px', cursor: 'pointer'}} onClick={() => navigate(-1)} />
                    <HeadingSecondary
                        class='u-center-text u-margin-bottom-med heading-box--h'
                        text='Best Tour Packages in Pakistan'
                    />
                </div>
                <section className="list">
                    <li className="list-link"><Link style={{fill: "#28a654", fontSize: '20px', cursor: 'pointer'}} /><a className="link-tag" href="https://pakistantourntravel.com/tours/skardu-tour-packages/">     Skardu Tour Packages</a></li>
                    <li className="list-link"><Link style={{fill: "#28a654", fontSize: '20px', cursor: 'pointer'}} /><a className="link-tag" href="https://pakistantourntravel.com/tours/hunza-valley-tour-packages/">     Hunza Tour Packages</a></li>
                    <li className="list-link"><Link style={{fill: "#28a654", fontSize: '20px', cursor: 'pointer'}} /><a className="link-tag" href="https://pakistantourntravel.com/tours/naran-kaghan-tours/">     Naran Tour Packages</a></li>
                    <li className="list-link"><Link style={{fill: "#28a654", fontSize: '20px', cursor: 'pointer'}} /><a className="link-tag" href="https://pakistantourntravel.com/tours/swat-tour-packages/">     Swat Tour Packages</a></li>
                    <li className="list-link"><Link style={{fill: "#28a654", fontSize: '20px', cursor: 'pointer'}} /><a className="link-tag" href="https://pakistantourntravel.com/tours/azad-kashmir-tour/">      Azad Kashmir Tour Packages</a></li>
                </section>
            </section>
            </main>
            <Footer />
        </>
    );
}

export default Packages;