import { useState, useRef, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {useAuth0} from '@auth0/auth0-react';
import axios from 'axios';

import Navbar from '../Navbar/Navbar';
import AddDetails from './AddDetails/AddDetails';
import Modal from '../UI/Modal/Modal';
import About from './About/About';
import Location from './Location/Location';
import HeadingSecondary from '../UI/HeadingSecondary';

const Profile = props => {

    const [open, setOpen] = useState(false);
    const [autoComplete, setAutoComplete] = useState(null);
    const [coordinates, setCoordinates] = useState({});
    const [isProfile, setIsProfile] = useState(null);
    const [refresh, setRefresh] = useState(false);

    const {user, getAccessTokenSilently} = useAuth0();

    const placeName = useRef(null);
    const gender = useRef(null);
    const phoneNo = useRef(null);
    const rate = useRef(null);
    const userArr = user.sub.split('|');
    let cName;

    if(user.name.includes('@')) {
        cName = user.name.split('@')[0];
    } else {
        cName = user.name;
    }


    useEffect(() => {
        const getGuide = async () => {
            try {
                const token = await getAccessTokenSilently();
                const response = await axios.get(`http://localhost:8000/v1/profile/${userArr[1]}`,{
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                });
                setIsProfile(response.data);
            } catch(err) {
                console.log(err);
            }
        }
        getGuide();
    },[refresh]);

    const closeModalHandler = () => {
        setOpen(false);
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        const profile = {
            userId: userArr[1],
            name: cName,
            email: user.email,
            gender: gender.current.value,
            cityName: placeName.current.value,
            picture: user.picture,
            phoneNo: phoneNo.current.value,
            rate: rate.current.value,
            email_verified: user.email_verified,
            location: {
                lat: coordinates.lat,
                lng: coordinates.lng
            }
        };
        
        try {
            const token = await getAccessTokenSilently();
            await axios.post(`http://localhost:8000/v1/profile`, profile ,{
                headers: {
                    authorization: `Bearer ${token}`
                }
            });
            setOpen(false);
            setRefresh(true);
        } catch(err) {
            console.log(err);
        }
    }

    const onLoad = (autoC) => setAutoComplete(autoC);

    const onPlaceChanged = () => {
        const lat = autoComplete.getPlace().geometry.location.lat();
        const lng = autoComplete.getPlace().geometry.location.lng();

        setCoordinates({
            lat,
            lng
        });
    }

    return (
        <>
            <Modal open={open} onClose={closeModalHandler}>
                {user.email_verified ? (
                    <AddDetails 
                        submitHandler={submitHandler} 
                        onLoad={onLoad} 
                        onPlaceChanged={onPlaceChanged} 
                        placeName={placeName}
                        gender={gender}
                        phoneNo={phoneNo}
                        rate={rate}
                    />
                ) : <HeadingSecondary class='u-center-text'  text='Please Verify your E-mail'/>}
                
            </Modal>
            <div className="main" id="profile">
                <div className="profile">
                    <Navbar />
                    <div className="profile__user">
                        <div className="flex">
                            <img src={user.picture} alt="User" className="profile__user--img" />
                            <div className="profile__user--info">
                                <h3 className="profile--heading">{cName}</h3>
                                {isProfile ? <Location lat={isProfile.location.lat} lng={isProfile.location.lng} /> : <button onClick={() => setOpen(!open)} className="u-margin-top-min btn btn--green guide--btn">Add Details</button>}
                            </div>
                            {isProfile ? <Link to={`/clients/${isProfile.userId}`} className="btn btn--green guide--btn btn-clients ">View Clients</Link> : null}
                        </div>
                    </div>
                    
                    <About 
                        user={user}
                        profile={isProfile}
                    />
            </div>    
        </div>
    </>
    );
}

export default Profile;