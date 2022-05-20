const Paragraph = props => {
    return (
        <p className={`paragraph ${props.class}`}>
            {props.text}
        </p>
    );
}

export default Paragraph;