const TextBox = props => {
    return (
        <h1 className="u-margin-top-mid">
            <span className="text-white heading-primary--main">{props.heading}</span> <br />
            <span className="text-white heading-primary--sub">{props.slogan}</span>
        </h1>
    );
}

export default TextBox;