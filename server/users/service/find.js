const User = require('../../models/user');

const service = (req, res) => {
    const { id } = req.params;
    let users;
    //search by id
    if (id) {
        users = User.findById(id);
    } else {
        //get all users
        users = User.findAll({
            order: [
                ['firstName', 'ASC'],
                ['lastName', 'ASC']
            ]
        });     
    }

    users
        .then(users => {
            if (!users) {
                return res.status(404).json({
                    status: false,
                    data:{}
                });    
            }
            return res.status(200).json({
                status: true,
                data: users
            });
        })
        .catch((error) => {
            return res.status(500).json({
                status: false,
                data:{}
            });
        });
}

module.exports = service;