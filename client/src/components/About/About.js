import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import CenterText from '../UI/CenterText';
import HeadingSecondary from '../UI/HeadingSecondary';
import AboutRow from './AboutRow/AboutRow';

const About = props => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])

    return (
        <main id='about' className='about' data-aos-easing={"ease-in-sine"} data-aos={"zoom-out-right"}>
            <section className='section-about'>
                <CenterText>
                    <HeadingSecondary text='How we May Help You' class='u-margin-top u-margin-bottom-big' />
                </CenterText>
                <AboutRow />
            </section>
        </main>
    );
};

export default About;