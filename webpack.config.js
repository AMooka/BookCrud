var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .splitEntryChunks()
    .enableSingleRuntimeChunk()
    .addEntry('app', './assets/js/app.js') // Assuming your main JavaScript file is app.js
    .enableSassLoader()
    .enablePostCssLoader((options) => {
        options.postcssOptions = {
            plugins: [
                require('postcss-import'),
                require('tailwindcss'),
                require('autoprefixer'),
            ]
        };
    });

module.exports = Encore.getWebpackConfig();
