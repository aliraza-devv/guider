const guides = require('./guide.mongo');


async function findUser(filter) {
    return await guides.findOne(filter);
}

async function existUserWithId(id) {
    return await findUser({
        userId: id
    })
}

async function getProfile(id) {
    return await existUserWithId(id);
}

async function addNewProfile(profile) {
    await guides.findOneAndUpdate({
        userId: profile.userId,
    }, profile,{
        upsert: true
    });
}

async function getGuides(placeName) {
    const guidesWithLocation = await guides.find({
        cityName: placeName
    }).exec();
    return guidesWithLocation;
}

async function addClient(id, tourist) {

    await guides.findOneAndUpdate({
        userId: id,
    }, {
        "$push": { "clients": tourist }
    });
}  

async function getClients(id) {
    return await guides.findOne({
        userId: id
    }, 'clients')
}

module.exports = {
    addNewProfile,
    getProfile,
    getGuides,
    addClient,
    existUserWithId,
    getClients
};