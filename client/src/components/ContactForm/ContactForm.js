import ContactRow from "./ContactRow/ContactRow";

const ContactForm = props => {
    return (
        <main id='contact' className='main-contact'>
            <section className='section-contact'>
                <div className='contact'>
                    <ContactRow />
                </div>
            </section>
        </main>
    );
}

export default ContactForm;