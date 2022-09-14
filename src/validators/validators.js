// -----------------  REGEX  ----------------------------
const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId;

const isValidEmail = function (mail) {
    if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
  };
  
  const isValidName = function(name){
    if (/^[A-Za-z]{1,35}/.test(name)) return true
    return false
  }
  
  const isValidBody = function (data) {
    return Object.keys(data).length > 0;
  }
  
  const isValidUrl = function(url){
    if (/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/
    .test(url)) return true
    return false
  }
  
  const isValidNumber = function(number){
    if (/^[0]?[6789]\d{9}$/.test(number)) return true
    return false
  }

  const isValidId = function (id) {
    return mongoose.Types.ObjectId.isValid(id);
  };
  

  module.exports ={ isValidEmail, isValidBody, isValidName, isValidUrl, isValidNumber, isValidId }
  