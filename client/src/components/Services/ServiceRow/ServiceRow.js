import Row from "../../UI/Row";
import ServiceBox from "../ServiceBox/ServiceBox";


const ServiceRow = props => {
    return (
        <Row 
            column1Content={
                <>
                    <ServiceBox 
                        icon='fa-route fa-2x' 
                        heading='Hire Guide' 
                        paragraph='We provide you the facility on your finger tips to hire the top guide for the searched place in a cheapest price.
                        which you cannot find anywhere else'
                    />
                    <ServiceBox 
                        icon='fa-2x fa-hands-helping' 
                        heading='Help' 
                        paragraph="The meaning of life is to find your gift. The purpose of life is to give it away.
                        As we help others the best we can to explore the beauty of this nature.It's been our only purpose."
                    />
                </>
            }
            column2Content={
                <>
                    <ServiceBox 
                        icon='fa-2x fa-map-marked-alt' 
                        heading='Cities Information' 
                        paragraph='We provide you the best information about all the places in pakistan like best hotels, resturants and best places to visit, with their rattings.'
                    />
                    <ServiceBox 
                        icon='fa-2x fa-atlas' 
                        heading='Tour Packages' 
                        paragraph='Now you also do not need to browse the internet to find best packages to visit pakistan beacause we also help you with this service.You can find best packages to visit any place you like on our website.' 
                    />
                </>
            }
            dataAos={'fade-up-right'}
            durationAos={'600'}
        />
    );
}

export default ServiceRow;