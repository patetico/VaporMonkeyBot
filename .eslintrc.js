module.exports = {
  root: true,

  env: {
    node: true,
    es6: true,
  },

  extends: [
    'airbnb-base',
  ],

  rules: {
    'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 0, maxEOF: 0 }],
  },

};
