/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    eslint: {
        dirs: ['src'],
    },
    compiler: {
        emotion: true,
    },
    // Настройка alias для упрощения импортов
    webpack(config: import('webpack').Configuration) {
        config.resolve = config.resolve || {};
        config.resolve.alias = {
            ...config.resolve.alias || {},
            '@': require('path').resolve(__dirname, 'src'),
        };
        return config;
    },
};

module.exports = nextConfig;