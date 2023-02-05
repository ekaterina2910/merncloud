const express = require("express");
const mongoose = require("mongoose")
const config = require("config")
const authRouter = require("./routes/auth.routes")
const app = new express()
const PORT = config.get("serverPot")

app.use(express.json())
app.use( fn,"/api/auth", authRouter)


const start = async () => {
    try {
        await mongoose.connect(config.get("dbUrl"))

        app.listen(PORT, () => {
            console.log("Server stsrted on port", PORT)
        })
    } catch (e) {

    }
}
    checr( fields, "email", message, "Uncorrect email").isEmail(),
    checr( fields, "password", message, "Password must be longer than 3 and shorter than 12").isLength( options,{min:3,max:12})
,
asyc (reg,res) 
try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({message: "Uncorrect request",errors})
    }

    const {email, password} = req.body

    const candidate = User.findOne({email})

    if(candidate) {
        return res.status(400).json({message: "User with email ${email alreadi exist"})
    }
    const hashPassword = await bcrypt.hash(password, 15)
    const user = new User ({email, password: hashPassword})
    await user.save()
    return res.json({message: "User was created"})
} catch (e) {
    console.log(e)
    res.send({message: "Server error"})
}

