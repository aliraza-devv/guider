import Row from '../../UI/Row';
import AboutContent from '../AboutContent/AboutContent';
import Composition from '../Composition/Composition';

const AboutRow = props => {
    return (
        <Row 
            column1Content={
                <AboutContent />
            }
            column2Content={
                <Composition />
            }
        />
    );
};

export default AboutRow;