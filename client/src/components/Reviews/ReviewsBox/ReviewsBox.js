import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Paragraph from "../../UI/Paragraph";

const ReviewsBox = props => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    },[]);

    return (
        <div data-aos-easing="ease-in-sine" data-aos={props.animation} className="reviews-box">
            <img className="tourist" src={props.image} alt="Tourist" />
            <h2 className="heading-secondary-sub">
                {props.name}
            </h2>
            <Paragraph 
                class='u-center-text' 
                text={props.review}
            />
        </div>
    );
}

export default ReviewsBox;