module.exports = {
    entry : './public/app.jsx',
    output : {
        path : __dirname,
        filename : './public/bundle.js'
    },
    resolve : {
      root: __dirname,
      alias: {
        Main: 'public/components/Main.jsx',
        About: 'public/components/About.jsx',
        Examples: 'public/components/Examples.jsx',
        Nav: 'public/components/Nav.jsx',
        Weather: 'public/components/Weather.jsx',
        WeatherForm: 'public/components/WeatherForm.jsx',
        WeatherMessage: 'public/components/WeatherMessage.jsx',
        OpenWeatherMap: 'public/api/OpenWeatherMap.jsx',
      },
        extensions : ['', '.js', '.jsx'],

    },
    module : {
        loaders : [{
            loader : 'babel-loader',
            query : {
                presets : ['react', 'es2015']
            },
            test : /\.jsx?$/,
            exclude : /(node_modules|bower_components)/
        }]
    },
    devtool: "cheap-module-eval-source-map"
};

// __dirname is a variable available in the node.js and
// it will give you the path by default
