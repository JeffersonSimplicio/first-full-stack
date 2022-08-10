const joi = require('joi');

const schemaId = joi.number().min(0).integer().required().messages({
  'any.required': 'It is mandatory to send a "id".',
  'number.base': 'The "id" must be in number format.',
  'number.min': 'The "id" must be at least 0.',
  'number.integer': 'The "id" must be an integer.'
});

const schemaTask = joi.string().min(3).max(320).required().messages({
  'any.required': 'It is mandatory to send a "task".',
  'string.empty': 'The "task" cannot be empty.',
  'string.base': 'The "task" must be in string format.',
  'string.min': 'It must be at least 3 characters long.',
  'string.max': 'The limit is 320 characters.'
});

function validator(schema, body) {
  const negocio = schema.validate(body);
  if (negocio.error) {
    const message = negocio.error.details[0].message;
    return { message };
  };
  const data = negocio.value;
  return { data };
}

module.exports = { validator, schemaTask, schemaId };
