"use strict"

module.exports = function(str, separator, limit) {
  if(!limit || separator === undefined) return str.split(separator, limit)
  if(!separator.length) return limit > 0 ? splitStart_noSep(str, limit) : splitEnd_noSep(str, -limit)
  return limit > 0 ? splitStart(str, separator, limit, 0, []) : splitEnd(str, separator, -limit, str.length, []) 
}


function splitStart_noSep(str, lim) {
  var ret = []
  lim = Math.min(lim, str.length) - 1
  for(var i=0;i<lim;++i) ret.push(str[i])
  ret.push(str.slice(lim))
  return ret
}

function splitEnd_noSep(str, lim) {
  var ret = []
  lim = Math.min(lim, str.length)
  var firstSlice = str.length - lim + 1
  ret.push(str.slice(0, firstSlice))
  for(var i=firstSlice;i<str.length;++i) ret.push(str[i])
  return ret
}


function splitStart(str, sep, lim, cur, acc) {
  var index = str.indexOf(sep, cur)
  if(index == -1 || acc.length + 1 == lim) {
    acc.push(str.slice(cur))
    return acc
  }
  acc.push(str.slice(cur, index))
  return splitStart(str, sep, lim, index + sep.length, acc)
}

function splitEnd(str, sep, lim, cur, acc) {
  var index = str.lastIndexOf(sep, cur)
  if(cur == -1 || index == -1 || acc.length + 1 == lim) {
    acc.unshift(str.slice(0, cur + 1))
    return acc
  }
  acc.unshift(str.slice(index + sep.length, cur + 1))
  return splitEnd(str, sep, lim, index - 1, acc)
}

