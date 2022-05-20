import Header from '../Header/Header';
import About from '../About/About';
import Services from '../Services/Services';
import Reviews from '../Reviews/Reviews';
import Footer from '../Footer/Footer';

const HomePage = props => {
    return (
        <>
            <Header />
            <About />
            <Services />
            <Reviews />
            <Footer />
        </>
    );
};

export default HomePage;