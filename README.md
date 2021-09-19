# webpack-typescrpit-boilerplate

**Typescript** is supported, but you can use **javascript** as well.

## about

This boilerplate contains configurations of all necessary tools for convenient development:

- webpack builds configuration

  - production
  - development

- linting and appearance

  - eslint
  - prettier
  - .editorconfig file

- pre-commit scripts

  - husky
  - lint-staged

## starting

1. `git clone https://github.com/Super-Cereal/webpack-typescript-boilerplate.git`

2. `npm ci`

3. `npm start` for development or `npm run build` for production build

## features

- You can use "@" as path to "src" folder, it means _@/index.js_ == _/src/index.js_

- You can use `.scss` files and `.module` styles

## with ReactJS

This boilerplate already supports JSX syntax. All you need is

1. `npm install react react-dom`
2. Using **typescript** `npm install -D @types/react @types/react-dom`

Now you can create _index.jsx_ file like this:

```js
import React from 'react';
import ReactDOM from 'react-dom';

import App from 'App';

ReactDOM.render(<App />, document.getElementById('root'));
```
