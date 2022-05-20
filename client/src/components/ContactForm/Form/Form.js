const Form = props => {
    return (
        <form className="form">
            <div className="form__group">
                <input type="text" className="form__input u-border-bottom" placeholder="Full Name" id="name" required />
                <label htmlFor="name" className="form__label">Full Name</label>
            </div>

            <div className="form__group">
                <input type="email" className="form__input u-border-bottom" placeholder="Email Address" id="email" required />
                <label htmlFor="email" className="form__label">Email Address</label>
            </div>
        </form>
    );
}

export default Form;