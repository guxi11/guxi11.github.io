---
layout: post
title:  "Release first npm package"
date:   2020-04-02 17:46:12 GMT+0800
catalog: true
tags:
  - npm
---

Just released a npm package, you can find the source files here: [markable](https://github.com/hbhde/markable).

## Get started

package: Markable

Init

```
md markable
cd markable
npm init
```

package.json

```js
{
  "name": "markable",
  "version": "0.0.0",
  "description": "Make non-English Markdown plain text markable",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/hbhde/markable.git"
  },
  "keywords": [
    "markdown",
    "markup",
    "html"
  ],
  "author": {
    "name": "Guxi11"
  },
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/hbhde/markable/issues"
  },
  "homepage": "https://github.com/hbhde/markable#readme"
}

```

Add index.js

```js
module.exports = function markable(text) {
  if (typeof text !== "string") throw new TypeError("Markable wants a string!");
  return text.replace(/》 /g, "> ").replace(/···/g, "```");
};
```

Add readme

Add License

* Find a GitHub repo and copy a MIT

Publish

```
npm publish --access=public
```

## Further version

Add badge

* heavily inspired by [marked](https://github.com/markedjs/marked) 

  ```md
  [![npm](https://badgen.net/npm/v/marked)](https://www.npmjs.com/package/marked)
  ```

* https://badgen.net for npm

* https://shields.io

## Resources

tutorial

* [tiny](https://juejin.im/post/5c26c1b65188252dcb312ad6) 

issues:

* [npm ERR! no_perms Private mode enable, only admin can publish this module:](https://www.jianshu.com/p/3b0cf9e652b5)
