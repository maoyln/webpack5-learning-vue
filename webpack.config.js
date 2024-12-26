const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 引入html-webpack-plugin插件
const { VueLoaderPlugin } = require('vue-loader/dist');
const loader = require('css-loader');

module.exports = {
  mode: 'development', // 指定开发模式
  entry: './src/main.js', // 指定入口文件
  
  // 出口文件
  output: {
    // 输出到dist文件夹（打包自动生成）
    path: path.resolve(__dirname, 'dist'), // __dirname当前文件所在的文件夹（表示当前文件所在的路径）
    filename: 'js/bundle-[contenthash].js', // 使用有生成的内容产生的hash
    clean: true, // 每次打包都清空dist文件夹
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // 指定模板文件
      filename: 'index.html', // 指定输出文件
      inject: 'body', // 指定插入到body中
    }),
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/, // 匹配.css结尾的文件
        use: ['style-loader', 'css-loader'], // 使用style-loader和css-loader[注意顺序！是从后往前加载的-即先加载css-loader,再加载style-loader]
      },
      {
        test: /\.less$/, // 匹配.less结尾的文件
        // 使用style-loader和css-loader[注意顺序！是从后往前加载的-即先加载css-loader,再加载style-loader]
        use: ['style-loader', 'css-loader', 'less-loader', {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                ['postcss-preset-env']
              ],
            },
          }
        }], 
      },
      {
        test: /\.(png|jpg|gif|jpeg|webp|svg|ico)$/, // 匹配图片文件
        type: 'asset', // 使用asset模块
        generator: {
          filename: 'images/[name]-[hash:6][ext]', // 指定输出的文件名
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb的图片会被base64处理
          },
        },
      },
      {
        test: /\.js$/, // 匹配js文件
        exclude: /node_modules/, // 排除node_modules文件夹
        use: {
          loader: 'babel-loader', // 使用babel-loader
          options: {
            presets: ['@babel/preset-env'], // 使用@babel/preset-env
          },
        },
      },
      {
        test: /\.vue$/, // 匹配vue文件
        loader: 'vue-loader', // 使用vue-loader
      }
    ],
  },
};
