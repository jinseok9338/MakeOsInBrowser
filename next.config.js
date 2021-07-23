import { description, name } from 'package.json';
import themes from 'styles/themes.json';

module.exports = {
  env: {
    description,
    name,
    theme: themes.default
  },
  reactStrictMode: true
};
// Todo Find a way to incorporate env into code
