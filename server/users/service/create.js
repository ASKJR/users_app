const User = require('../../models/user');

const service = (req, res) => {

    if ( !Object.keys(req.body).length || !req.body) {
        return res.sendStatus(400);
    }
    
    User.create(req.body)
        .then(user => {
            if (!user) {
                res.status(404).json({
                    status: false,
                    data: {}
                });
            }
            res.status(201).json({
                status: true,
                data: user
            });
        })
        .catch(error => {
            res.status(500).json({
                status: false,
                data: {}
            });
        });
}

module.exports = service;