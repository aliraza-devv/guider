import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Column = props => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    },[]);

    return (
        <div data-aos-easing="ease-in-sine" data-aos={props.animation} data-aos-duration="1000" className="col-1-of-3">
            <div className={`items items--${props.index}`}>
                <Link to={props.to} className="u-margin-top-big-2 u-margin-left-min btn btn-animated btn--white">{props.heading}</Link>
            </div>
        </div>
    );
}

export default Column;