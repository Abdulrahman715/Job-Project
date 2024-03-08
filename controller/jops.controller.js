const Jop = require('../models/jops.model');

const { validationResult } = require("express-validator");

const httpStatusText = require('../utils/httpStatusText');

const getAllJops = async(req, res) => {
    const jops = await Jop.find();

    res.status(200).json({
        status: httpStatusText.SUCCESS,
        data: {
            jops
        }
    });
};

const getSingleJop = async(req, res) => {

    const jop = await Jop.findById(req.params.jopId);

    if (!jop) {
        return res.status(404).json({
            status: httpStatusText.FAIL,
            data: null,
            message:"this jod not found"
        });
    }

    res.status(200).json({
        status: httpStatusText.SUCCESS,
        data: {
            jop,
        },
    });
};

const addJop = async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            status: httpStatusText.FAIL,
            data: null,
            message: errors.array(),
        });
    }

    const newJop = new Jop(req.body);
    await newJop.save();

    res.status(201).json({
        status: httpStatusText.SUCCESS,
        data: {
            newJop,
        },
    });
};

const updateJop = async(req, res) => {
    const jopId = req.params.jopId;

    const updatedJob = await Jop.findByIdAndUpdate(jopId, { $set: { ...req.body } });

    res.status(200).json({
        status: httpStatusText.SUCCESS,
        data: {
            updatedJob
        },
    });
};

const deleteJop = async(req, res) => {
    await Jop.deleteOne({ _id: req.params.jopId });

    res.status(200).json({
        status: httpStatusText.SUCCESS,
        data: null,
        message: "this job is deleted successfully",
    });
};

module.exports = {
    getAllJops,
    getSingleJop,
    addJop,
    updateJop,
    deleteJop
}

