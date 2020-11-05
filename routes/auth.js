const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcrypt.js");

router.get("/", (req, res) => {
    res.send("hello")
}
);

router.post("/signup", (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(422).json({ error: "please fill in both required fields" })
    }
    User.findOne({ email: email }).then((savedUser) => {
        if (savedUser) {
            return res.status(422).json({ error: "email already exists." })
        }
        bcrypt.hash(password, 12)
            .then(hashedpassword => {
                const user = new User({
                    email: email,
                    password: password
                })
                user.save()
                    .then(user => {
                        res.json({ message: "saved successfully" })
                    })
                    .catch(err => {
                        console.log(err)
                    })

            })

    }).catch(err => {
        console.log(err)
    })

})


module.exports = router