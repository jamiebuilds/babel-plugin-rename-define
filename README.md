# babel-plugin-rename-define

Rename define()

## Installation

```sh
$ npm install babel-plugin-rename-define
```

## Usage

<!--
### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["define-to-ember-define"]
}
```

### Via CLI

```sh
$ babel --plugins define-to-ember-define script.js
```
-->

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: [{ transformer: require("babel-plugin-rename-define")("new-define-name"), position: "after" }]
});
```
