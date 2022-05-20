import {useState, useContext} from 'react';

import {Autocomplete} from '@react-google-maps/api';

import TextBox from "../TextBox/TextBox";
import {CoordinateContext} from '../../../context/coordinateContext';

const PlacesHeader = props => {

    const [autoComplete, setAutoComplete] = useState(null);
    
    const coor = useContext(CoordinateContext);

    const onLoad = (autoC) => setAutoComplete(autoC);

    const onPlaceChanged = () => {
        const lat = autoComplete.getPlace().geometry.location.lat();
        const lng = autoComplete.getPlace().geometry.location.lng();
        coor.setCoordinates({lat,lng});
    }

    // restrictions={{country: 'pk',}}

    return (
        <div className="header__text-box header-place u-margin-top-min">
            <TextBox 
                heading='Tourist Guide'
                slogan='Is where nature goes'
            />
            <form className="search u-margin-top-min" onSubmit={props.onSubmit}>
            <Autocomplete options={{ types: ['(cities)'] ,componentRestrictions: {country: 'pk'}}} onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                    <input 
                        size="60" 
                        className="search__input" 
                        type="text" 
                        placeholder={props.placeH ? props.placeH : 'City Name'} 
                        ref={props.placeNameRef} 
                    />
                </Autocomplete>
                <button className="btn btn-animated btn--white u-margin-top-min">Search Place</button>
            </form>
        </div>
    );
}

export default PlacesHeader;