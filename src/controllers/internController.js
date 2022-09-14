const internModel = require("../models/internModel.js")

const createIntern = async function(req,res){
    let data = req.body
    let saved = await internModel.create(data)
    res.status(201).send({status: true,data:saved})
}

module.exports.createIntern = createIntern
