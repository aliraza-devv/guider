import {useEffect, useState, useRef} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

import Modal from '../../UI/Modal/Modal';
import AddDetails from '../AddDetails/AddDetails';
import HeadingSecondary from '../../UI/HeadingSecondary';


const Guide = props => {

    const [open,setOpen] = useState(false);
    const [success, setSuccess] = useState(false);
    const [isAlready, setIsAlready] = useState('');

    const tName = useRef(null);
    const tEmail = useRef(null);
    const tPhoneNo = useRef(null);

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    },[]);

    const closeModalHandler = () => {
        setOpen(false);
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const tourist = {
                'name': tName.current.value,
                'email': tEmail.current.value,
                'phoneNo': tPhoneNo.current.value
            }
            await axios.post(`http://localhost:8000/guides/addClient/${props.user.userId}`, tourist);
            setSuccess(true);
            setTimeout(() => {
                setOpen(false);
            }, 2000);
        } catch(err) {
            setIsAlready(`Already Contacted ${props.user.name}`);
            setSuccess(true);
            setTimeout(() => {
                setOpen(false);
            }, 2000);
        }
    }

    return (   
        <>    
            <Modal open={open} onClose={closeModalHandler}>
                {
                    success ? <HeadingSecondary class='u-center-text'  text={isAlready.length > 0 ? `${isAlready}` : 'Contact You Soon!!!'}/> : (
                        <AddDetails 
                            name={props.user.name}
                            submitHandler={submitHandler} 
                            tName={tName}
                            tEmail={tEmail}
                            tPhoneNo={tPhoneNo}
                        />
                    )
                }
            </Modal>
            <div data-aos-easing="ease-in-sine" data-aos={props.animation} data-aos-duration="1000" className="col-1-of-3">
                <div className="guide__style">
                    <div className="guide">
                        <img src={props.user.picture} alt="Guide" className="guide__img" />
                        <div className="guide__info">
                            <h5 className="guide__info--text">Name: <span className="guide__info--style">{props.user.name}</span> </h5>
                            <h5 className="guide__info--text">Gender: <span className="guide__info--style">{props.user.gender}</span> </h5>
                            <h5 className="guide__info--text">Phone No: <span className="guide__info--style">{props.user.phoneNo}</span> </h5>
                            <h5 className="guide__info--text">Rate: <span className="guide__info--style">{props.user.rate}/hr</span> </h5>
                            <h5 className="guide__info--text">City: <span className="guide__info--style">{props.user.cityName}</span> </h5>
                            <button onClick={() => setOpen(!open)} className="u-margin-top-min btn btn--green guide--btn">Hire</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Guide;