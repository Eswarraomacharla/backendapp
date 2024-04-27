const Admin = require("../models/Admin");
const FCMapping = require('../models/Mapping');

const checkadminlogin = async (request, response) => {
    try {
        const input = request.body;
        console.log(input);
        const admin = await Admin.findOne(input);
        response.json(admin);
    } catch (error) {
        response.status(500).send(error.message);
    }
};

const fcmapping = async (request, response) => {
    try {
        const input = request.body;
        const mapping = new FCMapping(input);
        await mapping.save();
        response.send('Added Successfully');
    } catch (error) {
        response.status(500).send(error.message);
    }
};

const viewfcmapping = async (request, response) => {
    try {
        const mappings = await FCMapping.find();
        if (mappings.length === 0) {
            response.send("DATA NOT FOUND");
        } else {
            response.json(mappings);
        }
    } catch (error) {
        response.status(500).send(error.message);
    }
};

module.exports = {
    checkadminlogin,
    fcmapping, 
    viewfcmapping
};
