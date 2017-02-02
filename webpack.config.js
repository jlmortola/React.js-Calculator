module.exports = {
  entry: './public/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },

  resolve: {
    root: __dirname,
    alias: {
    Calc: 'public/components/Calc.jsx',
    Result: 'public/components/Result.jsx',
    Display: 'public/components/Display.jsx',
    Footer: 'public/components/Footer.jsx',
    Nums: 'public/components/Nums.jsx'
    },

    extensions: ['', '.js', '.jsx']

  },

  module:{
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets:['react','es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules)/
      }
    ]
  }
}
