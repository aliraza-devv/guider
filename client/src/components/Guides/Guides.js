import { useContext, useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import {CoordinateContext} from '../../context/coordinateContext';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import HeadingSecondary from '../UI/HeadingSecondary';
import Paragraph from '../UI/Paragraph';
import Guide from './Guide/Guide';


const Guides = props => {

    const [guides,setGuides] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const coor = useContext(CoordinateContext);
    const navigate = useNavigate();

    useEffect(() => {

        const getGuides = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/guides/${coor.cityName}`);
                setGuides(response.data);
                setIsLoading(false);
            } catch(err) {
                console.log(err);
            }
        }
        getGuides();
    },[]);

    const chunk = arr => {
        const size = 3;
        const chunkedArray = [];
        for (let i = 0; i < arr.length; i++) {
            const last = chunkedArray[chunkedArray.length - 1];
            if(!last || last.length === size){
                chunkedArray.push([arr[i]]);
            }else{
                last.push(arr[i]);
            }
        };
        return chunkedArray;
    };

    const getGuidesBox = () => {
        const chArr = chunk(guides);
        return chArr.map((c,i) => {
            return (
                <div key={i} className='row'>
                    {c.map((g,i) => {
                        return (
                            <Guide key={i} animation='flip-up' user={g} />
                        )
                    })}
                </div>
            )
        })
    }

    return (
        <>
            <Navbar />
            <main id="services">
                <section className='section-services'>
                    <div className='heading-box'>
                        <ArrowBackIcon style={{fill: "#23752d", fontSize: '30px', cursor: 'pointer'}} onClick={() => navigate(-1)} />
                        <HeadingSecondary
                            class='u-center-text u-margin-bottom-med heading-box--h'
                            text={`Hire Local Guides in ${coor.cityName}`}
                        />
                    </div>
                    {isLoading ? (
                        <div className='loading u-center-text'>
                            <CircularProgress style={{'color': '#23752d'}} size="10rem" />
                        </div>
                    ) : guides.length > 0 ? getGuidesBox() : <Paragraph text='Oops, No Guide Found' class='u-center-text u-margin-top-mid' /> }
                
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Guides;