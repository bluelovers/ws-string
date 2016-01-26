# chinese-parseint
parse Chinese numeric strings to integer

## Install
`npm install chinese-parseint`

## Usage
```javascript
var chi_parseInt = require('chinese-parseint');
console.log(chi_parseInt('一千零一十')); ///< Outputs 1010
console.log(chi_parseInt('二十四萬二')); ///< Outputs 242000
```

See `chi_parseInt.characters` for corresponding numbers of each accepted Chinese character.
