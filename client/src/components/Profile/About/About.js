const About = props => {
    let about = (
        <div className="profile__about">
            <h5 className="profile__about--heading profile--heading--sm">Contact information</h5>
            <h5 className="profile__about--text u-margin-top-min-6">Email : </h5><span className="profile__about--style">{props.user.email}</span>{!props.user.email_verified && <span className="not-verified">(Not Verified)</span>}
            <h5 className="profile__about--text u-margin-top-min-6">Gender: </h5><span className="profile__about--style profile__about--style-404">Add Details</span>
            <h5 className="profile__about--text u-margin-top-min-6">Phone : </h5><span className="profile__about--style profile__about--style-404">Add Details</span>
            <h5 className="profile__about--text u-margin-top-min-6">Price : </h5><span className="profile__about--style profile__about--style-404">Add Details</span>
        </div>
    );


    if (props.profile) {
        about = (
            <div className="profile__about">
                <h5 className="profile__about--heading profile--heading--sm">Contact information</h5>
                <h5 className="profile__about--text u-margin-top-min-6">Email : </h5><span className="profile__about--style">{props.user.email}</span>
                <h5 className="profile__about--text u-margin-top-min-6">Gender: </h5><span className="profile__about--style">{props.profile.gender}</span>
                <h5 className="profile__about--text u-margin-top-min-6">Phone : </h5><span className="profile__about--style">{props.profile.phoneNo}</span>
                <h5 className="profile__about--text u-margin-top-min-6">Price : </h5><span className="profile__about--style">{props.profile.rate}</span>
            </div>
        );
    }
    
    return about;
}

export default About;