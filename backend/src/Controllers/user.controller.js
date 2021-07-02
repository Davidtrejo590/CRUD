/* Create HTTP verbs */
const User = require('../Models/User.model');
userController = {};

/* GET */
userController.getUsers = async (request, response) => {
    const users = await User.find();
    response.json(users);
    console.log('GET - /api/users');
};

/* GET - ONE */
userController.getUser = async (request, response) => {
    const user = await User.findById(request.params.id);
    response.json(user);
    console.log('GET - /api/users');
};

/* POST */
userController.postUser = async (request, response) => {
    const { name, lastName, web, countrie } = request.body;
    const newUser = new User({
        name: name,
        lastName: lastName,
        web: web,
        countrie: countrie
    });
    await newUser.save();
    response.json({ message: 'POST - User Created'});
    console.log('POST - /api/users');

};

/* PUT */
userController.putUser = async (request, response) => {
    const { name, lastName, web, countrie } = request.body;
    await User.findOneAndUpdate({_id: request.params.id}, {
        name: name,
        lastName: lastName,
        web: web,
        countrie: countrie
    });

    response.json({ mesagge: 'PUT - User Updated'});
    console.log('PUT - /api/users');    
};

/* DELETE */
userController.deleteUser = async (request, response) => {
    const user = await User.findByIdAndDelete(request.params.id);
    response.json({ message: 'DELETE - User Deleted', user: user});
    console.log('DELETE - /api/users');    
};


module.exports = userController;