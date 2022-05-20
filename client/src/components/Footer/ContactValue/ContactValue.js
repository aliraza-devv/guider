const ContactValue = props => {
    return (
        <div className="contacts__value">
            <h5 className="contacts__heading__sub">{props.heading}</h5> 
            <h5 className="contacts__heading__sub">{props.value}</h5>
        </div>
    );
}

export default ContactValue;