var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var userSchema = new Schema({
    name:{
        type : String,
        required : true
    },
    avatar:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    },
    password: {
        type : String,
        required : true
    },
    userType: { 
        type : String,
        enum : ["ADMIN", "USER"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});
 
module.exports = mongoose.model('User', userSchema);