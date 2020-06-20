const path = require('path');

module.exports = {
    mode: 'development',

    entry: path.join(__dirname, 'src', 'index.js'),

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
    },

}