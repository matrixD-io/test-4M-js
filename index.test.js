const load4M = require('./index.js');

describe('load4M', () => {
  it('resolves to a Buffer', async () => {
    const result = await load4M();
    expect(result).toBeInstanceOf(Buffer);
  });
});
