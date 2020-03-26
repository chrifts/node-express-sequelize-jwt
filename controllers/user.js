//This is a model controller

//First, import the model
const User = require('../models').User;
//const Data = require('../models').Data; this model is created by sequelize CLI command:  model:create. See docs

module.exports = {
    //This function 'create', insert an user in DB
    create(req, res) {
        return User.create({name: req.body.name, lastname: req.body.lastname})
        .then(user => res.status(201).send(user))
        .catch(error => res.status(400).send(error))
    },
    //function update, for update update
    //function delete. for delete row

}