const Validator = require('../lib/Validator');

describe('Validator', () => {
  let validator;

  describe('required fields', () => {
    beforeAll(() => {
      validator = new Validator('age', {
        type: Number,
        required: true
      });
    });
  
    it('returns the field', () => {
      const dog = {
        name: 'spot',
        age: 5,
        weight: '20 lbs'
      };
  
      expect(validator.validate(dog)).toEqual(5);
    });
  });
});
