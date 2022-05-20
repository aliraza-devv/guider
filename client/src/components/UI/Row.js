const Row = props => {
    return (
        <div 
            data-aos={props.dataAos} 
            data-aos-duration={props.durationAos}
            className={'row'}
        >
            <div className={'col-1-of-2'}>
                {props.column1Content}
            </div>
            <div className={'col-1-of-2'}>
                {props.column2Content}
            </div>
        </div>
    );
}

export default Row;