const router = require("express").Router();
const User = require("../models/User")

router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,

    })
    try {
        const newsave = await newUser.save()
            .then((newsave) => {
                res.status(201).json(newsave); // Send the saved user object back to the client
            })
    } catch (err) {
        // Handle any errors that occur during the save process
        res.status(500).json(err);
    }

})

module.exports = router;