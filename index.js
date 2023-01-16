const fs = require('fs').promises;

/**
 * Returns the contents of 4M.bin.
 *
 * @returns {Promise<Buffer>}
 */
module.exports = async function () {
  const data = await fs.readFile('4M.bin', 'binary');
  return Buffer.from(data);
};
