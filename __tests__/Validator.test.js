const Validator = require('../lib/Validator');

describe('Validator', () => {
  let validator;

  describe('requiring fields', () => {
    beforeAll(() => {
      validator = new Validator('age', {
        type: Number,
        required: true
      });
    });
  
    it('returns the field', () => {
      const wine = {
        name: 'vinto',
        age: 20,
        price: '1000 buckaroos'
      };
  
      expect(validator.validate(wine)).toEqual(20);
    });

    it('casts field to the inputted type', () => {
      const wine = {
        name: 'vinto',
        age: '20',
        price: '1000 buckaroos'
      };
  
      expect(validator.validate(wine)).toEqual(20);
    });
  
    it('returns absent fields', () => {
      const wine = {
        name: 'vinto',
        price: '1000 buckaroos'
      };
  
      expect(() => validator.validate(wine)).toThrowErrorMatchingSnapshot();
    });
  });
  
  describe('optional fields', () => {
    beforeAll(() => {
      validator = new Validator('age', {
        type: Number
      });
    });
  
    it('returns the field', () => {
      const wine = {
        name: 'vinto',
        age: 20,
        price: '1000 buckaroos'
      };
  
      expect(validator.validate(wine)).toEqual(20);
    });
  
    it('casts field to the inputted type', () => {
      const wine = {
        name: 'vinto',
        age: '20',
        price: '1000 buckaroos'
      };
  
      expect(validator.validate(wine)).toEqual(20);
    });
  
    it('returns null if field is not required', () => {
      const wine = {
        name: 'vinto',
        age: 20,
        price: '1000 buckaroos'
      };
  
      expect(validator.validate(wine)).toBeNull();
    });
  });
});
