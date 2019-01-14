const User = require('../../models/user');

const service = (req, res) => {
    const { id } = req.params;
    
    if (!id || !Object.keys(req.body).length || !req.body) {
        return res.sendStatus(400);
    }
    console.log(req.body,id);
    User.findById(id)
        .then(user => {
            if (!user) {
                return res.status(404).json({
                    status: false,
                    data: {}
                });    
            }

            user.update(req.body)
                .then(() => {
                    return res.status(200).json({
                        status: true,
                        data: user
                    });
                })
                .catch(error => {
                    return res.status(500).json({
                        status: false,
                        data: {}
                    });
                });
                
        })
        .catch(error => {
            return res.status(500).json({
                status: false,
                data: {}
            });
        });
}
module.exports = service;