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

    
  });
});
