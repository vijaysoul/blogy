const models = require('../../models');
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const login = async function (req, res) {
  let user = await models.User.findOne({ email: req.body.email });
  if (user) {
    bcrypt.compare(req.body.password, user.password, function (err, result) {
      if (err) throw err;
      if (result) {
        jwt.sign({ id: user._id, type: user.userType }, process.env.JWT_KEY, { expiresIn: "1h" }, function(err, token){
          if(err) throw err;
          res.status(200).json({
            message: "Correct",
            users : user,
            token: token
          })
        })
      } else {
        res.status(401).json({
          message: "Password wrong"
        })
      };
    })
  } else {
    res.status(401).json({
      message: "Email Not found"
    })
  }
}

const getUsers = async (req, res)=>{
   const data = await models.User.find();
    res.status(200).json(data);
}

module.exports = {login, getUsers};