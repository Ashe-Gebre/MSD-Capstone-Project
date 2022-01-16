

const express= require('express');
const router = express.Router();

const { signin, signup , getAllusers, getUserById } = require("../controllers/userController.js") ;

router.post("/signin", signin);
router.post("/signup", signup);
router.get("/", getAllusers);
router.get("/:id", getUserById);

module.exports= router;