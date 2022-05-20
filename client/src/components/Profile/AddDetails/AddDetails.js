import {Autocomplete} from '@react-google-maps/api';

const AddDetails = props => {

    return (
        <form onSubmit={props.submitHandler} className='detail_form'>
            <h1 className='detail_form_heading'>Add or Edit Details</h1>
            <div className="p__billing__group">
                <Autocomplete options={{ types: ['(cities)'] ,componentRestrictions: {country: 'pk'}}} onLoad={props.onLoad} onPlaceChanged={props.onPlaceChanged}>
                    <input type="text" className="p__billing__input" placeholder="Location" id="Select Location" ref={props.placeName} required />
                </Autocomplete>
                <label htmlFor="location" className="p__billing__label" >Select Location</label>
            </div>
            <div className="p__billing__group">
                <input type="text" pattern="^(?:m|M|male|Male|f|F|female|Female)$" className="p__billing__input" placeholder="Gender" id="gender" ref={props.gender} required />
                <label htmlFor="gender" className="p__billing__label" >Gender</label>
            </div>
            <div className="p__billing__group">
                <input type="text" pattern="^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$" className="p__billing__input" placeholder="Phone Number" id="phone" ref={props.phoneNo} required />
                <label htmlFor="phone" className="p__billing__label" >Phone Number</label>
            </div>
            <div className="p__billing__group">
                <input type="text" className="p__billing__input" placeholder="Hourly Rate" id="price" defaultValue="Rs.1000" onKeyDown={(event) => {event.preventDefault();}} ref={props.rate} required />
                <label htmlFor="price" className="p__billing__label" >Hourly Rate</label>
            </div>
            
            <button className='btn btn--green' type='submit'>Save Details</button>
        </form>
    );
}

export default AddDetails;