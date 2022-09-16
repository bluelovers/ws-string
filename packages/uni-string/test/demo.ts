/**
 * Created by user on 2018/3/16/016.
 */

import UString from '../src';

console.log(UString.support);

let t = (new UString('♥️𠬠典')).padStart(10, '𠬠');

t = t.concat('\n♥️𠬠典そこで彼らは\'"\'👩‍👩‍👧‍👦\'，オリーブ山と呼ばれる山からエルサレムに帰った。');

console.dir(t);

let t2 = new UString(t);

console.log('length', t2.length);
console.log('charLength', t2.charLength);
console.log('size()', t2.size());

console.log(t2);

//console.log(666, t2.substr(-9, 3));
console.log(666, t2.indexOf('𠬠典', 2));
console.log(666, t2.endsWith('𠬠典'));


let t3 = new UString('👩‍👩‍👧‍👦');
console.log(t3.size(), t3.split(''));
