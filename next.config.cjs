import { description, name } from 'package.json';
import themes from 'styles/themes.json';

module.exports = {
  env: {
    description,
    name,
    theme: themes.default
  },
  reactStrictMode: true,
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en',
    localeDetection: false
  }
};
// Todo Find a way to incorporate env into code
