import HeadingTertiary from "../../UI/HeadingTertiary";
import Paragraph from "../../UI/Paragraph";

const AboutContent = () => {
    return (
        <>
            <HeadingTertiary class='u-margin-bottom-small' text='You are going to fall in love with Nature' />
            <Paragraph text='Imagine lying in soft green grass, watching wispy white clouds drift across a cornflower blue sky. 
                             Or transport yourself to an old growth forest with gnarly old trees covered in lush green moss.
                             We will help you to experience all that with our help as a guide and with our provided information.' />
            <HeadingTertiary class='u-margin-bottom-small' text='Live like you never have before' />
            <Paragraph text="When you're in nature, you don't have to look in mirrors. Instead, 
                            you're either focused on the setting around you, 
                            or on what you are doing, like climbing, setting up a tent, or gardening.
                            You feel comfortable in your own skin, you experience your own quiet peace and strength, 
                            you sense the inner you that is the true you." />
        </>
    );
};

export default AboutContent;