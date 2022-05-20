const {
    getGuides,
    addClient,
    getClients,
    existUserWithId
} = require('../../models/guide.model');

async function httpGetGuides(req,res) {
    const {placeName} = req.params;
    const guides = await getGuides(placeName);
    return res.status(200).json(guides);
}

async function httpAddClient(req,res) {
    const {id} = req.params;
    const tourist = req.body;

    if(!tourist.name || !tourist.email || !tourist.phoneNo) {
        return res.status(400).json({
            error: 'Missing required property'
        });
    }

    const user = await existUserWithId(id);

    if(!user) {
        return res.status(400).json({
            error: 'Wrong ID'
        });
    }

    const clients = await getClients(id);
    const cClients = clients.clients.filter(el => el.email === tourist.email);
    if(cClients.length > 0) {
        return res.status(409).json({
            message: 'Already exist'
        });
    }

    await addClient(id, tourist);
    return res.status(201).json({
        message: 'Added'
    });
}

module.exports = {
    httpGetGuides,
    httpAddClient
};