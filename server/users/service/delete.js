const User = require('../../models/user');

const service = (req, res) => {
    const { id } = req.params;
    
    User.findById(id)
        .then(user => {
            if (!user) {
                return res.status(404).json({
                    status: false,
                    data: {}
                });    
            }

            user.destroy();

            return res.status(200).json({
                status: true,
                data: user
            })
            
                
        })
        .catch(error => {
            return res.status(500).json({
                status: false,
                data: {}
            });
        });
}

module.exports = service;