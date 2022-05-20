import {useState, useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';

import {CssBaseline, Grid} from '@material-ui/core';

import { getPlacesData } from '../../api/travelAdvisorAPI';
import InformationHeader from './InformationHeader/InformationHeader';
import List from './List/List';
import Map from './Map/Map';
import { CoordinateContext } from '../../context/coordinateContext';

const CityInformation = props => {

    const [places, setPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState({});
    const [childClicked, setChildClicked] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [type, setType] = useState('attractions');
    const [rating, setRating] = useState('');
    const [filteredPlaces, setFilteredPlaces] = useState([]);

    let { cityName } = useParams();
    const coor = useContext(CoordinateContext);

    useEffect(() => {
        setCoordinates({lat: coor.coordinates.lat, lng: coor.coordinates.lng});
    },[coor]);

    useEffect(() => {
        const filterPlaces = places.filter((place) => place.rating > rating);
        setFilteredPlaces(filterPlaces);
    },[rating]);

    useEffect(() => {
        if(bounds.sw && bounds.ne) {

        setIsLoading(true);

        getPlacesData(type, bounds.sw, bounds.ne)
            .then((data) => {
                setPlaces(data);
                setFilteredPlaces([]);
                setIsLoading(false);
            });
        }
    },[type,bounds]);

    return (
        <>
            <CssBaseline />
            <InformationHeader placeName={cityName} />
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item xs={12} md={4}>
                    <List 
                        places={filteredPlaces.length ? filteredPlaces : places}
                        childClicked={childClicked}
                        isLoading={isLoading}
                        type={type}
                        setType={setType}
                        rating={rating}
                        setRating={setRating}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                        places={filteredPlaces.length ? filteredPlaces : places}
                        setChildClicked={setChildClicked}
                    />
                </Grid>
            </Grid>
        </>
    );
}

export default CityInformation;