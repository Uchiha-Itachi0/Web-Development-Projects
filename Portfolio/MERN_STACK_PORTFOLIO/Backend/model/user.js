const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    name: String,
    email: String,
    password: String,
    about: {
        type: String,
        required: [true, "You have to enter about"]
    },
    skill:[
        {
            title: {
                type: String,
                required: [true, "Enter the title for this Skill"]
            },
            percentage: {
                type: Number,
                required: [true, "Enter the percentage for this Skill"]
            },

        }
    ],
    projects: [
        {
            title: {
                type: String,
                required: [true, "Enter the title for this Project"]
            },
            desc: {
                type: String,
                required: [true, "Enter the description for this Project"]
            },
            number: {
                type: Number,
                required: [true, "Enter the seriel number for this Project"]
            },
            tag: [{
                type: String,
                required: [true, "Enter the tag for this projcet"]
            }]
        }
    ]

});


module.exports = mongoose.model("User", userSchema);