const HeadingTertiary = props => {
    return (
        <h3 className= {`heading-tertiary ${props.class}`} >
            {props.text}
        </h3>
    );
}

export default HeadingTertiary;