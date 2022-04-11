const User = require('../model/user');

exports.dataForUser = (req, res, next) => {

    User.find().select("-name -email -password")
    .then(data => {
        res.status(200).json(
            {
                message: "SUCCESSFULL",
                data
            }
        )
    })
    .catch(error => {
        res.status(500).json(
            {
                message: "Something is wrong",
                error
            }
        )
    }) 

}

exports.postDataForUser = (req, res, next) => {

    User.create(req.body)
    .then(() => {
        res.status(200).json(
            {
                message: "Successfully posted"
            }
        )
    })
    .catch(error => {
        console.log(error)
        res.status(400).json(
            {
                message: "Something went wrong",
                error
            }
        )
    });
}