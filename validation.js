const Joi = require("@hapi/joi")
const registervalidation=(data)=>{
        const schema={
        name :Joi.string()
            .min(6).required(),
        email: Joi.string().
            min(6).required()
            .email(),
        password:Joi.string()
            .min(6).
            required().
            email(),
        }
       return  schema.validate(data)
}
module.exports.registervalidation=registervalidation