const { mongoose } = require("../config/db");
let userSchema = new mongoose.Schema({   //JS Object
            firstname: {
                type: String,
                required:true
            },
            lastname: {
                type: String,
                required:true
            },
            email: {
                type: String,
                required:true
            },
            username:{
                type: String,
                required:true
            },
            password:{
                type: String,
                required:true
            },
            role: {
                type: String,
                required:true
            }
        },{
            timestamps: true,
            toJSON: { virtuals: true },
            toObject: { virtuals: true }
})

exports.User = mongoose.model('Users',userSchema);