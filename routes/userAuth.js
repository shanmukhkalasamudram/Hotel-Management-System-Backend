const express = require("express")
const { signup, signin, signout } = require("../controllers/user")
const {check} = require('express-validator')
const router = express.Router()

router.post('/signup', [
  check("username", "Name atleast should be 3 characters").isLength({min: 3}),
  check("email", "Email should be valid").isEmail(),
  check("password", "Password is too Simple").isLength({min: 6}),
] ,signup)

router.post('/signin', signin)

router.get("/signout", signout)

module.exports = router