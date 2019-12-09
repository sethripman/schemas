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
  });
});
