"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});

const o = [ {
  default: {
    from: 65281,
    to: 65374,
    values: [ 12288 ]
  },
  number: {
    from: 65296,
    to: 65305
  },
  "A-Z": {
    from: 65313,
    to: 65338
  },
  "a-z": {
    from: 65345,
    to: 65370
  },
  space: {
    values: [ 12288 ]
  },
  slash: {
    values: [ 65295, 65340 ]
  },
  bracket: {
    values: [ 65288, 65289, 65339, 65341, 65371, 65373 ]
  },
  not_default: {
    from: 65281,
    to: 65374,
    values: [ 12288 ],
    not: [ {
      from: 65296,
      to: 65305
    }, {
      from: 65313,
      to: 65338
    }, {
      from: 65345,
      to: 65370
    }, {
      values: [ 12288 ]
    } ]
  }
}, {
  default: {
    from: 33,
    to: 126,
    values: [ 32 ]
  },
  number: {
    from: 48,
    to: 57
  },
  "A-Z": {
    from: 65,
    to: 90
  },
  "a-z": {
    from: 97,
    to: 122
  },
  space: {
    values: [ 32 ]
  },
  slash: {
    values: [ 47, 92 ]
  },
  bracket: {
    values: [ 40, 41, 91, 93, 123, 125 ]
  },
  not_default: {
    from: 33,
    to: 126,
    values: [ 32 ],
    not: [ {
      from: 48,
      to: 57
    }, {
      from: 65,
      to: 90
    }, {
      from: 97,
      to: 122
    }, {
      values: [ 32 ]
    } ]
  }
} ];

exports.default = o, exports.tableFullHalf = o, exports.tableFullHalfDefaultInclude = [ "number", "A-Z", "a-z", "space", "not_default" ];
//# sourceMappingURL=index.cjs.production.min.cjs.map
