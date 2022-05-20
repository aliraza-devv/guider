import React, {createContext, useState} from 'react';

export const CoordinateContext = createContext();

export const CoordinateProvider = props => {

    const [coordinates, setCoordinates] = useState({});
    const [cityName, setCityName] = useState(null);

    return (
        <CoordinateContext.Provider value={{coordinates, setCoordinates, cityName, setCityName}}>
            {props.children}
        </CoordinateContext.Provider>
    );
}