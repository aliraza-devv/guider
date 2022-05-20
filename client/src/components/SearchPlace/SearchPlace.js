import {useRef, useState, useEffect} from 'react';
import {animateScroll} from 'react-scroll';

import Navbar from '../Navbar/Navbar';
import PlacesHeader from './PlacesHeader/PlacesHeader';
import PlacesRow from './PlacesRow/PlacesRow';
import {PlaceShape} from '../UI/svgComponents/index';

import {useContext} from 'react';

import {CoordinateContext} from '../../context/coordinateContext';

const SearchPlace = props => {

    const [showRow, setShowRow] = useState(false);
    const [cityName, setCityName] = useState(null);

    const placeName = useRef(null);

    const coor = useContext(CoordinateContext);

    useEffect(() => {
        if(coor.cityName) {
            setShowRow(true);
            animateScroll.scrollToBottom();
            setCityName(coor.cityName);
        }
    },[coor.cityName]);

    const submitForm = (e) => {
        e.preventDefault();

        if(placeName.current.value === '') {
            return;
        }  
        setShowRow(true);
        animateScroll.scrollToBottom();
        coor.setCityName(placeName.current.value);
    }

    return (
        <div className='place'>
            <div className='main-place'>
                <div className='header'>
                    <Navbar />
                    <PlacesHeader
                        placeNameRef={placeName}
                        onSubmit={submitForm}
                        placeH={cityName}
                    />
                </div>
                <PlaceShape className='shape-place' />
                {showRow ? <PlacesRow place={!cityName ? placeName.current.value : cityName} /> : null}
            </div>
        </div>
    );
}

export default SearchPlace;