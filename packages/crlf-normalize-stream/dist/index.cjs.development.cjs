'use strict';

var stream = require('stream');
var crlfNormalize = require('crlf-normalize');

function transformLinebreak(newline) {
  return new stream.Transform({
    transform(chunk, _encoding, callback) {
      const data = crlfNormalize.crlf(chunk.toString(), newline);
      callback(null, data);
    }
  });
}
// @ts-ignore
{
  Object.defineProperty(transformLinebreak, "__esModule", {
    value: true
  });
  Object.defineProperty(transformLinebreak, 'transformLinebreak', {
    value: transformLinebreak
  });
  Object.defineProperty(transformLinebreak, 'default', {
    value: transformLinebreak
  });
}

// @ts-ignore
module.exports = transformLinebreak;
//# sourceMappingURL=index.cjs.development.cjs.map
