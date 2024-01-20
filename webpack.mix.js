// webpack.mix.js

let mix = require('laravel-mix');

mix.js('src/js/app.js', 'assets')
   .sass('src/css/app.scss', 'assets');