"use strict";

//Validation ---
var Joi = require('@hapi/joi');

var _require = require('mongoose'),
    model = _require.model; //Reister Form Validation


var regUserValidation = function regUserValidation(date) {
  var schema = Joi.object({
    name: Joi.string().min(6).required(),
    lname: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    pwd: Joi.string().min(6).required()
  });
  return schema.validate(date);
}; //Reister Form Validation


var loginUserValidation = function loginUserValidation(date) {
  var schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    pwd: Joi.string().min(6).required()
  });
  return schema.validate(date);
}; //Post Validation


var postValidation = function postValidation(date) {
  var schema = Joi.object({
    title: Joi.string().min(6).max(100).required(),
    text: Joi.string().max(255).min(6).required(),
    postBy: Joi.string().required()
  });
  return schema.validate(date);
}; //Book Validation


var bookValidation = function bookValidation(data) {
  var schema = Joi.object({
    isbn: Joi.string().min(6).max(100).required(),
    name: Joi.string().max(100).min(6).required(),
    author: {
      aut_id: Joi.string().required(),
      aut_name: Joi.string().required(),
      aut_lname: Joi.string().required()
    },
    cat: {
      cat_id: Joi.string().required(),
      cat_name: Joi.string().required()
    },
    lang: {
      lang_id: Joi.string().required(),
      lang_name: Joi.string().required()
    },
    edition: Joi.number().min(1).required()["default"](1),
    volume: Joi.number().required()["default"](0),
    wrapper: Joi.number().max(255).required(),
    unit: {
      unit_id: Joi.string().required(),
      unit_type: Joi.string().required()
    },
    price: Joi.number().required(),
    details: {
      view: Joi.number().required()["default"](0),
      content: Joi.string().min(10).max(255),
      shelf: Joi.string().max(150).min(6).required(),
      publisher: {
        pub_id: Joi.string().required(),
        pub_name: Joi.string().required()
      },
      pdf: Joi.string().required(),
      img: Joi.string().required(),
      transilator: {
        trans_id: Joi.string(),
        trans_name: Joi.string(),
        trans_lname: Joi.string()
      }
    }
  });
  return schema.validate(data);
};

var authorValidation = function authorValidation(data) {
  var schema = Joi.object({
    first_name: Joi.string().min(1).max(100).required(),
    last_name: Joi.string().min(1).max(100).required(),
    img: Joi.string().required(),
    about: Joi.string().required(),
    email: Joi.string().email(),
    website: Joi.string()
  });
  return schema.validate(data);
};

var transilatorValidation = function transilatorValidation(data) {
  var schema = Joi.object({
    first_name: Joi.string().min(1).max(100).required(),
    last_name: Joi.string().min(1).max(100).required(),
    img: Joi.string().required(),
    about: Joi.string().required(),
    email: Joi.string().email(),
    website: Joi.string()
  });
  return schema.validate(data);
};

var customerValidation = function customerValidation(data) {
  var schema = Joi.object({
    id_card: Joi.number().max(100),
    first_name: Joi.string().required().max(100),
    last_name: Joi.string().required().max(100),
    is_active: Joi["boolean"](),
    details: {
      street: Joi.string().required().max(100),
      street2: Joi.string().max(100),
      country: {
        _id: Joi.string().required(),
        cnt_name: Joi.string().required(),
        cnt_code: Joi.number().required()
      },
      city: {
        _id: Joi.string().required(),
        city_name: Joi.string().required()
      },
      email: Joi.string().email().required().min(6).max(100),
      phone: Joi.number().required().min(9).max(10)
    }
  });
  return schema.validate(data);
};

module.exports.regUserValidation = regUserValidation;
module.exports.loginUserValidation = loginUserValidation;
module.exports.postValidation = postValidation;
module.exports.bookValidation = bookValidation;
module.exports.authorValidation = authorValidation;
module.exports.transilatorValidation = transilatorValidation;
module.exports.customerValidation = customerValidation;