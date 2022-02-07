const _=require('lodash')
const array1=[1,[2,[3,[4,[5]]]]];
const flat=_.flattenDeep(array1);
console.log(flat);