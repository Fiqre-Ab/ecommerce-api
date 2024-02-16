const router = require("express").Router();

router.get("/usertest", (req,res) => {
    res.send("User is successful");

})
router.post("/postest",(req,res)=>{
    const username=req.body.username;
    res.send("the username is "+username);
})

module.exports =router;