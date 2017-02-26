# React SPA
Starter Repo for a Webpack, Redux & React application

This is a fork of WebpackProject available on https://github.com/StephenGrider/WebpackProject

This repo has everything you will need to get started on a project using React and Reduxas your 
front-end framework. 

Currently it contains:

1) React
2) Redux + Redux utility modules
3) ESLint
4) Webpack with support for .js, .jsx, .css, .scss files


## To use
```
git clone https://github.com/3nvi/react-spa-starter.git
cd react-spa-starter
npm install
```

Running **npm run build** will create 2 JS, 1 HTML and 1 CSS file in the */dist* directory.

The 1st JS file will have all of your custom code bundled and it will be named bundle.js

The 2nd JS file will have all the node modules bundled together and will be named vendor.js

The HTML will contain all the necessary imports that you will need and can be extended through the
index.ejs found inside the */src* directory.

The CSS file will contain all CSS and SASS assets that have been included inside the 
*/style/index.scss* file. 


