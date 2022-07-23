const db = require("../models"); 
const Auth = db.auth; //Auth Models
const cryptoJS = require("crypto-js"); //use to encrypt the Password
const { Op } = require("sequelize");

require("dotenv").config(); 


const Register = async (req, res) => {
  try {
    const registerUser = await Auth.create({
      firstname: req.body.firstname,
      middlename: req.body.middlename,
      surname: req.body.surname,
      username: req.body.username,
      password: cryptoJS.AES.encrypt(   //encrypt the password
        req.body.password,
        process.env.CRYPTO_PASS
      ).toString(),
    });
    res.status(200).json(registerUser);
  } catch (err) {
    res.status(500).json(err);
  }
};


const Login = async (req, res) => {
  try {
    const loginUser = await Auth.findOne({ //find the data if the username matches
      where: {
        username: req.query.username,
      },
    });

    
    if (loginUser) {
      const PasswordDecrypt = cryptoJS.AES.decrypt(  //decrypt the password of found data
        loginUser.password,
        process.env.CRYPTO_PASS
      );

      const InputPassword = PasswordDecrypt.toString(cryptoJS.enc.Utf8);

      if (InputPassword === req.query.password) {
        const { password, ...others } = loginUser.dataValues;
        return res.status(200).json({ ...others }); //to hide the password
      } else {
        return res.status(401).json("Wrong Credentials");
      }
    } else {
      return res.status(401).json("Account doesn't exist");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { Register, Login };
