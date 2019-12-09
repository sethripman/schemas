const { getCaster } = require('./types');

module.exports = class Validator {
  constructor(field, { type, required }) {
    this.field = field;
    this.type = type;
    this.caster = getCaster(type);
    this.required = required;
  }

  validate(input) {
    const value = input[this.field];
    if(this.required && !value) throw new Error(`${this.field} is required`);
    if(!this.required && !value) return null;

    return this.caster(value);
  }
};
