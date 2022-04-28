const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
    mode:'development',
    entry:{
        main:path.resolve(__dirname,'src/index.js')
    },
    devtool: 'inline-source-map',
    output:{
        filename:'[name].js',
        path: path.resolve(__dirname,'dist'),
        clean:true
    },
    devServer:{
        static:path.resolve(__dirname,'dist'),
        open:true,
        hot:true,
        port:3000
    },
    module:{
        rules:[
            {
                test:/\.scss/,
                use:['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:path.resolve(__dirname,'src/indexTemplate.html')
        })
    ]
}