# feathers-typescript

[![Greenkeeper badge](https://badges.greenkeeper.io/feathersjs/feathers-typescript.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/feathersjs/feathers-typescript.png?branch=master)](https://travis-ci.org/feathersjs/feathers-typescript)
[![Code Climate](https://codeclimate.com/github/feathersjs/feathers-typescript/badges/gpa.svg)](https://codeclimate.com/github/feathersjs/feathers-typescript)
[![Test Coverage](https://codeclimate.com/github/feathersjs/feathers-typescript/badges/coverage.svg)](https://codeclimate.com/github/feathersjs/feathers-typescript/coverage)
[![Dependency Status](https://img.shields.io/david/feathersjs/feathers-typescript.svg?style=flat-square)](https://david-dm.org/feathersjs/feathers-typescript)
[![Download Status](https://img.shields.io/npm/dm/feathers-typescript.svg?style=flat-square)](https://www.npmjs.com/package/feathers-typescript)

> TypeScript definition for Feathers modules

## Installation

```
npm install feathers-typescript --save
```

## Documentation

Please refer to the [feathers-typescript documentation](http://docs.feathersjs.com/) for more details.

## Complete Example

Here's an example of a Feathers server that uses `feathers-typescript`. 

```js
const feathers = require('feathers');
const rest = require('feathers-rest');
const hooks = require('feathers-hooks');
const bodyParser = require('body-parser');
const errorHandler = require('feathers-errors/handler');
const plugin = require('feathers-typescript');

// Initialize the application
const app = feathers()
  .configure(rest())
  .configure(hooks())
  // Needed for parsing bodies (login)
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  // Initialize your feathers plugin
  .use('/plugin', plugin())
  .use(errorHandler());

app.listen(3030);

console.log('Feathers app started on 127.0.0.1:3030');
```

## License

Copyright (c) 2016

Licensed under the [MIT license](LICENSE).
