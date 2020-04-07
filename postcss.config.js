/** 此工具是找所有檔案裏有用到 tailwindcss 的 class */
const purgecss = require('@fullhuman/postcss-purgecss')({

    // Specify the paths to all of the template files in your project 
    content: [
      './src/**/*.html',
      './src/**/*.vue',
      './src/**/*.jsx',
      // etc.
    ],
  
    // Include any special characters you're using in this regular expression
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  })

  /** 如果是正式環境，則只包用到的class，如果是開發環境則全部包 */
  
  module.exports = {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
      ...process.env.NODE_ENV === 'production'
        ? [purgecss]
        : []
    ]
  }