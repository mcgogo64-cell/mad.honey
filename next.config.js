/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en','tr','es','fr','de','ar','hi','zh','ja','ru'],
    defaultLocale: 'en'
  }
};

module.exports = nextConfig;
