# transform-colors
Color conversion and transform library

## Installation
```bash
npm install transform-colors
```

## Usage

```javascript
const transformColors = require('transform-colors');

console.log(transformColors.hex2hsl('#FF0000'));
```

## Methods

#### rgb2hex(r, g, b)
```javascript
const tsclr = require('transform-colors');
console.log(tsclr.rgb2hex(255,0,0));
// #FF0000
```

#### rgb2hsl(r, g, b)
```javascript
const tsclr = require('transform-colors');
console.log(tsclr.rgb2hsl(255,0,0));
// [0, 50, 100]
```

#### hsl2hex(h, s, l)
```javascript
const tsclr = require('transform-colors');
console.log(tsclr.hsl2hex(0, 50, 100));
// #FF0000
```

#### hsl2rgb(h, s, l)
```javascript
const tsclr = require('transform-colors');
console.log(tsclr.hsl2rgb(0, 50, 100));
// [255, 0, 0]
```

#### hex2rgb(String #XXXXXX)
```javascript
const tsclr = require('transform-colors');
console.log(tsclr.hex2rgb("#FF0000"));
// [255, 0, 0]
```

#### hex2hsl(String #XXXXXX)
```javascript
const tsclr = require('transform-colors');
console.log(tsclr.hex2hsl("#FF0000"));
// [0, 50, 100]
```


