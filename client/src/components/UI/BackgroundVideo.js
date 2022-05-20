import bgVideo from '../../assets/video/cover.mp4';

const BackgroundVideo = props => {
    return (
        <div className="bg-video">
            <video className="bg-video__content" autoPlay muted loop>
                <source src={bgVideo} type="video/mp4" />
                <source src={bgVideo} type="video/webm" />
                Your browser is not supported!
            </video>
        </div>
    );
}

export default BackgroundVideo;