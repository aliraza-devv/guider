const {
    existUserWithId,
    getClients
} = require('../../models/guide.model');

async function httpGetClients(req,res) {
    const {id} = req.params;
    const user = await existUserWithId(id);

    if(!user) {
        return res.status(400).json({
            error: 'Wrong ID'
        });
    }

    const clients = await getClients(id);
    return res.status(200).json(clients);
}

module.exports = {
    httpGetClients
}