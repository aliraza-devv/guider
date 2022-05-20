const HeadingSecondary = props => {
    return (
        <h2 className={`heading-secondary ${props.class}`}>
            {props.text}
        </h2>
    );
}

export default HeadingSecondary;