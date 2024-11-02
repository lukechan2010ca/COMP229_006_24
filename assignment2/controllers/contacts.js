let UserModel = require('../models/contacts');

module.exports.create = async function(req, res, next) {
    try {
        let newContact = new UserModel(req.body);

        let result = await UserModel.create(newContact);
        //console.log(result);

        res.json({
            status: 'OK',
            message: 'Contact created successfully',
        });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.list = async function(req, res, next) {
    try {
        let list = await UserModel.find({}, '-password');
        res.json(list);
    } 
    catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.contactGet = async function(req, res, next) {
    try {
        let uID = req.params.userID;
        res.user = await UserModel.findOne({ _id: uID}, '-password');
        next();
    } 
    catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.contactByid = async function(req, res, next) {
    res.json(res.user);
}

module.exports.update = async function(req, res, next) {
    try {
        let uID = req.params.userID;
        let updateUser = new UserModel(req.body);
        updateUser._id = uID;
        let result = await UserModel.updateOne({ _id: uID}, updateUser);
        console.log(result);

        if (result.modifiedCount > 0) {
            res.json(
                {
                    status: 'OK',
                    message: 'User updated successfully'
                }
            );
        } else {
            throw new Error('User not updated, User not found or no changes');
        }   
    }
    catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.delete = async function(req, res, next) {
    try {
        let uID = req.params.userID;
        let result = await UserModel.deleteOne({ _id: uID});
        console.log(result);

        if (result.deletedCount > 0) {
            res.json(
                {
                    status: true,
                    message: 'User deleted successfully'
                }
            );
        } else {
            throw new Error('User not deleted, User not found');
        }   
    }
    catch (error) {
        console.log(error);
        next(error);
    }
}