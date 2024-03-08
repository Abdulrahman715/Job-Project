const express = require('express');

const router = express.Router();

const jopsController = require("../controller/jops.controller");

const { validationSchema } = require('../middleware/jops.validation');

router.route('/')
    .get(jopsController.getAllJops)
    .post(validationSchema(), jopsController.addJop);

router.route("/:jopId")
    .get(jopsController.getSingleJop)
    .patch( jopsController.updateJop)
    .delete( jopsController.deleteJop);

module.exports = router;