'use strict';

const awesome = require('./lib/index.js');

module.exports = {
  plugins: { awesome },
  rules: {
    'awesome/no-spaces': 'error',
  }
}
