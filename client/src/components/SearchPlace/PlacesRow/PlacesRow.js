import Column from "./Column/Column";

const PlacesRow = props =>{
    return (
        <div className="row" id='searchResult'>
            <Column 
                animation='zoom-out-right'
                heading='Information'
                to={`/information/${props.place}`}
                index='1'
            />
            <Column 
                animation='flip-up'
                heading='Top Guides'
                to={'/guides'}
                index='2'
            />
            <Column 
                animation='zoom-out-left'
                heading='Tour Packages'
                to='/packages'
                index='3'
            />
        </div>
    );
}  

export default PlacesRow;