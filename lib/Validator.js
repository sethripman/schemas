const { getCaster } = require('./types');

module.exports = class Validator {
  constructor(field, { type, required }) {
    this.field = field;
    this.type = type;
    this.required = required;
    this.caster = getCaster(type);
  }
};
