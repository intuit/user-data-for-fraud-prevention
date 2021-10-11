module.exports = {
  root: true,
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "jest/globals": true
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  plugins: ["jest"],
  extends: [
    "eslint:recommended",
    "plugin:jest/recommended"
  ],
  parser: "babel-eslint"
};
