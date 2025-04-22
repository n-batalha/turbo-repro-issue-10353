/** @type {import('next').NextConfig} */

const { SST_ENV_FOR_TEST } = process.env;

console.log('SST_ENV_FOR_TEST: ', SST_ENV_FOR_TEST)

if (!SST_ENV_FOR_TEST) {
    throw new Error('no env var!')
}
throw new Error('All good! Just preventing a real deploy, but the env var is here')

const nextConfig = {};

export default nextConfig;
