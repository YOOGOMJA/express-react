module.exports = {
    entry : './src/index.js',

    output : {
        path : __dirname + '/public',
        filename : 'bundle.js'
    },

    module : {
        loders : [
            {
                test : /\.js$/,
                loader : 'loader',
                exclude : /node_modules/,
                query : {
                    cacheDirectory : true,
                    presets : ['es2015' , 'react']
                }
            }
        ]
    }
};

