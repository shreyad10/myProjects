// ------------- VALIDATORS ----------------
const collegeModel = require('../models/collegeModel')
const internModel = require('../models/internModel')
const { isValidBody, isValidEmail, isValidId, isValidName, isValidNumber, isValidUrl } = require('../validators/validators')


const collegeValidator = async function (req, res, next) {
    let data = req.body
    if (!isValidBody(data)) return res.status(400).send({ status: false, message: "Request body can't be empty" })
    let { name, fullName, logoLink } = data

    if (!name || !isValidName(name.trim())) return res.status(400).send({ status: false, message: "Enter name in valid format" })

    let result = await collegeModel.findOne({ name: name })
    console.log(result)
    if (result) return res.status(400).send({ status: true, message: "This college already exist! " })

    if (!fullName || !isValidName(fullName.trim())) return res.status(400).send({ status: false, message: "Enter fullName in valid format" })
    if (!logoLink || !isValidUrl(logoLink.trim())) return res.status(400).send({ status: false, message: "Enter logoLink in valid format" })
    next()

}

const internValidator = async function (req, res, next) {
    let data = req.body
    if (!isValidBody(data)) return res.status(400).send({ status: false, message: "Request body can't be empty" })

    let { name, email, mobile, collegeId } = data
    if (!name || !isValidName(name.trim())) return res.status(400).send({ status: false, message: "Enter name in valid format" })

    if (!email || !isValidEmail(email.trim())) return res.status(400).send({ status: false, message: "Enter email in valid format" })
    let result = await internModel.findOne({ email: email })
    if (result) return res.status(400).send({ status: false, message: "This email is already registered" })

    if (!mobile || !isValidNumber(mobile.trim())) return res.status(400).send({ status: false, message: "Enter mobile in valid format" })
    if (!collegeId || !isValidId(collegeId.trim())) return res.status(400).send({ status: false, message: "Enter collegeId in valid format" })
    next()
}

module.exports.collegeValidator = collegeValidator
module.exports.internValidator = internValidator
