const {
    addNewProfile,
    getProfile
} = require('../../models/guide.model');

async function httpGetProfile(req,res) {
    const id = req.params.id;
    const existProfile = await getProfile(id);

    if(!existProfile) {
        return res.status(404).json({
            error: 'Profile not found'
        });
    }

    return res.status(200).json(existProfile);
}

async function httpAddProfile(req,res) {
    const profile = req.body;
    if(!profile.name || !profile.email || !profile.gender || !profile.location || !profile.cityName || !profile.picture || !profile.phoneNo || !profile.rate || !profile.location.lat || !profile.location.lng || !profile.userId || !profile.email_verified)  {
        return res.status(400).json({
            error: 'Missing required property'
        });
    }
    
    await addNewProfile(profile);
    return res.status(201).json(profile);
}


module.exports = {
    httpGetProfile,
    httpAddProfile
};