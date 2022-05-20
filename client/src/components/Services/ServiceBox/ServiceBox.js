import Paragraph from "../../UI/Paragraph";

const ServiceBox = props => {
    return (
        <div className='u-margin-top-min'>
            <i className={`icon fas ${props.icon}`}></i>
            <h2 className='heading-secondary-sub u-margin-bottom-small'>
                {props.heading}
            </h2>
            <Paragraph 
                class='service-para' 
                text={props.paragraph} 
            />
        </div>
    );
}

export default ServiceBox;