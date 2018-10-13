
<p align="center">
    <h3 align="center">Simple React Webpack Babel Starter Kit<br></h3>
</p>

[![CircleCI](https://circleci.com/gh/ReactJSResources/react-webpack-babel/tree/master.svg?style=svg)](https://circleci.com/gh/ReactJSResources/react-webpack-babel/tree/master)

[![Dependency Status](https://img.shields.io/david/ReactJSResources/react-webpack-babel.svg)](https://david-dm.org/dylang/npm-check)

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

Tired of complicated starters with 200MB of dependencies which are hard to understand and modify? This is for you!

### What we're using

* NPM 8
* Webpack 3
* React 16
    * Hot Module Reloading
    * React Router 4
* Babel CLI
* Jest 22
* Enzyme 3

### Features

* Simple src/index.jsx.
* Webpack configuration for development (with hot reloading) and production (with minification).
* React Hot Loader for live reloading without the loss of state during development.
* [Webpack Dashboard Plugin](https://github.com/FormidableLabs/webpack-dashboard) on dev server.

### To run

* You'll need to have [git](https://git-scm.com/) and [node](https://nodejs.org/en/) installed in your system.
* Fork and clone the project:

```
git clone https://github.com/ReactJSResources/react-webpack-babel.git
```

* Then install the dependencies:

```
yarn install
```

* Run development server:

```
yarn start
```

* Or you can run development server with [webpack-dashboard](https://github.com/FormidableLabs/webpack-dashboard):

```
yarn dev
```

Open the web browser to `http://localhost:8888/`

### To test
To run unit tests:

```
yarn test
```

Tests come bundled with:

* Jest
* Enzyme
* React Test Utils
* React Test Renderer

### To build the production package

```
yarn build
```

### Running build locally

If you are using Mac/Linux simply run the following command inside public directory:

```
python -m SimpleHTTPServer 8000
```

### Nginx Config

Here is an example Nginx config:

```
server {
  # ... root and other options

  gzip on;
  gzip_http_version 1.1;
  gzip_types text/plain text/css text/xml application/javascript image/svg+xml;

  location / {
    try_files $uri $uri/ /index.html;
  }

  location ~ \.html?$ {
    expires 1d;
  }

  location ~ \.(svg|ttf|js|css|svgz|eot|otf|woff|jpg|jpeg|gif|png|ico)$ {
    access_log off;
    log_not_found off;
    expires max;
  }
}
```

### ESLint
There is a `.eslintrc` config for eslint ready with React plugin.

To run linting, run:

```
yarn lint
```

### Prettier
There is a `.prettierrc` configuration for Prettier.

To prettify code, run:

```
yarn prettify
```

To test prettier before changing any files, run:

```
yarn prettify-test
```

### Contribute
Please contribute to the project if you know how to make it better, including this README :)
