import { useState, useEffect } from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {useAuth0} from '@auth0/auth0-react';
import axios from 'axios';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { CircularProgress } from '@material-ui/core';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import HeadingSecondary from '../UI/HeadingSecondary';
import Paragraph from '../UI/Paragraph';
import ClientBox from './ClientBox/ClientBox';
import Modal from '../UI/Modal/Modal';

const ShowClients = () => {

    const [clients,setClients] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    let { userId } = useParams();
    const navigate = useNavigate();
    const {getAccessTokenSilently, user} = useAuth0();

    useEffect(() => {
        const getClients = async () => {
            try {   
                const token = await getAccessTokenSilently();
                const response = await axios.get(`http://localhost:8000/v1/clients/${userId}`,{
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                });
                setClients(response.data.clients);
                setIsLoading(false);
            } catch(err) {
                console.log(err);
            }
        }
        getClients();
    },[]);

    return (
        <>
        <Navbar />
        <main id="services">
            <section className='section-services height-main'>
                <div className='heading-box'>
                    <ArrowBackIcon style={{fill: "#23752d", fontSize: '30px', cursor: 'pointer'}} onClick={() => navigate(-1)} />
                    <HeadingSecondary
                        class='u-center-text u-margin-bottom-med heading-box--h'
                        text={`Your Clients`}
                    />
                </div>
                {isLoading ? (
                        <div className='loading u-center-text'>
                            <CircularProgress style={{'color': '#23752d'}} size="10rem" />
                        </div>
                    ) : clients.length > 0 ? clients.map((cl,i) => {
                        return <ClientBox client={cl} key={i} />
                    }) : <Paragraph text='Oops, No Clients Found' class='u-center-text u-margin-top-mid' /> }
            </section>
        </main>
        <Footer />
        </>
    );
}

export default ShowClients;