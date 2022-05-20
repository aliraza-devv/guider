import Row from "../../UI/Row";
import HeadingSecondary from "../../UI/HeadingSecondary";
import Form from "../Form/Form";

const ContactRow = props => {
    return (
        <Row
            column1Content={
                <>
                    <HeadingSecondary text='Get in touch' className='u-margin-top-mid u-center-text u-margin-bottom-big' />
                    <Form />
                </>
            }
            column2Content={
                <>
                    <div className="form__group u-margin-top-big">
                        <textarea name="message" cols="30" rows="10" className="form__input u-big-border" placeholder='Enter Your Message' />
                    </div>
                    <div className="form__group">
                        <button className="btn btn--green">
                            Send &rarr;
                        </button>
                    </div>
                </>
            }
        />
    );
}

export default ContactRow;