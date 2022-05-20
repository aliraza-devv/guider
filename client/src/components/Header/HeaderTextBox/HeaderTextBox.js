import {Link} from 'react-router-dom';

const HeaderTextBox = () => {
    return (
        <div className="header__text-box">
            <h1 className="header-primary">
                <span className="text-white heading-primary--main">Tourist Guide</span> <br />
                <span className="text-white heading-primary--sub">Is where nature goes</span>
            </h1>
            <div className="u-margin-top-min header-btn-group">
                <Link 
                    to="/searchPlaces" 
                    className="btn btn-animated btn--white"
                >
                    Search Place
                </Link>
                <Link 
                    to="/subscription" 
                    className="btn btn-animated btn--white "
                >
                    Donation
                </Link>
            </div>
        </div>
    );
};

export default HeaderTextBox;