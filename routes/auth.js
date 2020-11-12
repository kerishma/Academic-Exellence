const express = require("express");
const path = require("path");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../keys");
const requireLogin = require("../middleware/requireLogin");




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
                    password: hashedpassword
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

router.get("/protected", requireLogin, (req, res) => {

    res.send("you got into protected")
})

router.post("/", (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(422).json({ error: "please fill in both required fields" })
    }
    User.findOne({ email: email })
        .then(savedUser => {
            if (!savedUser) {
                return res.status(422).json({ error: "Invalid Email or Password" })
            }
            bcrypt.compare(password, savedUser.password)
                .then(doMatch => {
                    if (doMatch) {
                        // res.json({ message: "successfully logged in" })
                        const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET)
                        const { _id, email } = savedUser
                        res.json({ token, user: { _id, email } })
                    }
                    else {
                        return res.status(422).json({ error: "Invalid Email or Password" })
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        })

})

module.exports = router