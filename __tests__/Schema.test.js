const Schema = require('../lib/Schema');

describe('Schema tests', () => {
  it('validates an object by matching the schema', () => {
    const schema = new Schema({
      name: {
        type: String,
        required: true
      },
      age: {
        type: Number
      },
      price: {
        type: Number,
        reqired: true
      }
    });

    const daGoodVino = {
      name: 'The Prost with the Most',
      age: 200,
      price: 4999
    };

    expect(schema.validate(daGoodVino)).toEqual({
      name: 'The Prost with the Most',
      age: 200,
      price: 4999
    });
  
  });
  
  it('throws error on object not matching schema', () => {
    const schema = new Schema({
      name: {
        type: String,
        required: true
      },
      age: {
        type: Number
      },
      price: {
        type: Number,
        reqired: true
      }
    });

    const daMediocreVino = {
      name: 'delicious rose with pineapple and cheddar flavor',
      age: 'Beware death by drowning, beware the Ides of March!',
      price: 12
    };
  
    expect(() => schema.validate(daMediocreVino)).toThrowErrorMatchingSnapshot();
  });
});
