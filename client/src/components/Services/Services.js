import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import ServiceRow from './ServiceRow/ServiceRow';

const Services = props => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    },[]);

    return (
        <main id="services">
            <section className='section-services'>
                <h2 
                    data-aos={"fade-up-left"} 
                    data-aos-duration={"600"}
                    className='heading-secondary u-center-text'
                > 
                    Our Top Services
                </h2>
                <ServiceRow />
            </section>
        </main>
    );
}

export default Services;