# gobble-derequire

Remove `require()` calls with gobble and [derequire](https://github.com/calvinmetcalf/derequire).

## Installation

First, you need to have gobble installed - see the [gobble readme](https://github.com/gobblejs/gobble) for details. Then,

```bash
npm i -D gobble-derequire
```

## Usage

**gobblefile.js**

```js
var gobble = require( 'gobble' );
module.exports = gobble( 'src' ).transform( 'derequire', options );
```

The `options` argument, if specified, is passed to derequire, and can include `tokenFrom`, `tokenTo`, or (if you want to make multiple replacements simultaneously) a `replacements` array of `{ from, to }` objects. See the [derequire README](https://github.com/calvinmetcalf/derequire) for more information.


## License

MIT. Copyright 2015 Rich Harris
