import { useEffect, useState } from "react";
import axios from "axios";

const Location = props => {

    const [cityName, setCityName] = useState(null);

    useEffect(() => {
        const getLocation = async () => {
            try {
                const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${props.lat},${props.lng}&sensor=true&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`);
                const formattedName = response.data?.results[3].formatted_address;
                setCityName(formattedName);
            } catch (err) {
                console.log(err);
            }
        }
        getLocation();
    },[props.lat, props.lng]);

    return (
        <>
            <i className="profile__user--icon fa-xs fas fa-map-marker-alt"></i> 
            <span className="span">{cityName}</span>
        </>
    );
}

export default Location;