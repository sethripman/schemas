const Validator = require('./Validator');

module.exports = class Schema {
  constructor(schema) {
    this.schema = schema;
    this.properties = Object.entries(schema)
      .map(([field, options]) => new Validator(field, options));
  }

  validate(input) {
    const validated = {};
    const errors = [];
    this.properties
      .forEach(validator => {
        try {
          validated[validator.field] = validator.validate(input);
        } catch(error) {
          errors.push(error);
        }
      });
    
    if(errors.length > 0) {
      throw new Error(`invalid schema >> ${errors}`);
    }

    return validated;
  }
};
