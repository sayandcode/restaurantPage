const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
    mode:'production',
    entry:{
        main:path.resolve(__dirname,'src/index.js')
    },
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