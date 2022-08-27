const { User } = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");



//Generate the JWT token function
const generateJwtToken = (_id, role) => {
    return jwt.sign({ _id, role }, process.env.JWT_SECRET, {
      expiresIn: "2d",
    });
  };

let registerController = (req,res)=>{
    //.Check  user 
    User.findOne({email:req.body.email},async(err, user)=>{
        if(user){
            res.status(404).json({ message:"user is already registered"});
        }else{
            let salt =10;
            const hash_password = await bcrypt.hash(req.body.password, salt);
            req.body.password = hash_password;

            // insert  user info in mongodb
            const user = new User(req.body);
            user.save().then((data) =>{
                // console.log(data)
               // Generate the JWT token function colling
                var token = generateJwtToken(data._id, data.role);
                const { _id, firstname, lastname, email, role } = data;
                // console.log(token)
                res.status(200).json({
                    token,
                    user: { _id, firstname, lastname, email, role }
                    });
            }).catch((error) =>{
                res.status(404).json({ message:"error",error});
            }) 
        }
    })

}
module.exports ={registerController};