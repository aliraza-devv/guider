const CenterText = props => {
    return (
        <div className={`u-center-text ${props.class}`}>
            {props.children}
        </div>
    );
};

export default CenterText;