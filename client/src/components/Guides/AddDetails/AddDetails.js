const AddDetails = props => {
    return (
        <form onSubmit={props.submitHandler} className='detail_form'>
            <h1 className='detail_form_heading'>Contact with {props.name}</h1>
            <div className="p__billing__group">
                <input type="text" className="p__billing__input" placeholder="Your Name" id="name" ref={props.tName} required />
                <label htmlFor="name" className="p__billing__label" >Name</label>
            </div>
            <div className="p__billing__group">
                <input type="email" className="p__billing__input" placeholder="Your E-mail" id="email" ref={props.tEmail} required />
                <label htmlFor="gender" className="p__billing__label" >E-mail</label>
            </div>
            <div className="p__billing__group">
                <input type="text" pattern="^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$" className="p__billing__input" placeholder="Your Phone No." id="phone" ref={props.tPhoneNo} required />
                <label htmlFor="phone" className="p__billing__label" >Phone Number</label>
            </div>
            <button className='btn btn--green' type='submit'>Send Details</button>
        </form>
    );
}

export default AddDetails;