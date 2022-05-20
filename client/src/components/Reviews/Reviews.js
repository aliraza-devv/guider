import HeadingSecondary from "../UI/HeadingSecondary";
import BackgroundVideo from "../UI/BackgroundVideo";
import ReviewsBox from "./ReviewsBox/ReviewsBox";
import {User1, User2 ,User3} from '../../assets/img/index';

const Reviews = props => {
    return (
        <main id='reviews' className='main-reviews'>
            <section className='section-reviews'>
                <BackgroundVideo />
                <HeadingSecondary 
                    class='u-center-text u-margin-top-mid'
                    text='Happy Tourists'
                />
                <div className="reviews u-margin-top-min-3">
                    <ReviewsBox 
                        name='John Doe'
                        image={User1}
                        review='This website is user friendly website, Services are legit. 
                        And everything is in one place. Guides are not fake 
                        And the information about the places is also legit,
                        nothing is fake.'
                        animation='zoom-out-right'
                    />
                    <ReviewsBox 
                        name='James Smith'
                        image={User2}
                        review='This website is 100% real all the feature they provide are real,
                        and also very easy to use all the features. I would recommend you all to use that website.
                        Thanks! wwe all value your effort'
                        animation='flip-up'
                    />
                    <ReviewsBox 
                        name='Robert Brown'
                        image={User3}
                        review='Thanks for creating this website. Your website is very helpful for 
                        information and guidance about every place. I appreciate your work.
                        This website is very reliable. I love it.'
                        animation='zoom-out-left'
                    />
                </div>
            </section>
        </main>
    );
}

export default Reviews;