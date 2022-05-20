import Navbar from '../Navbar/Navbar';
import Paragraph from '../UI/Paragraph';
import HeadingSecondary from '../UI/HeadingSecondary';
import StripeContainer from '../StripeContainer/StripeContainer';
import Footer from '../Footer/Footer';

const PremiumPage = props => {
    return (
        <>  
            <Navbar  />
            <main id="services">
                <section className='section-services'>
                <HeadingSecondary
                    class='u-center-text'
                    text='If you like our Services, show your support with a donation.'
                />
                <Paragraph 
                    class='u-center-text' 
                    text='Its only $1.00.' 
                />
                <StripeContainer />
                </section>
            </main>
            <Footer />
        </>
    );
}

export default PremiumPage;