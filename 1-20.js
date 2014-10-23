// http://jsfiddle.net/jseja/NKsPh/
var objA = {property: 'value'};
var pointer1 = objA;
var pointer2 = pointer1;

// objA.propertyを変更すると、すべての参照がアップデートされる
console.log(objA.property, pointer1.property, pointer2.property);
pointer2.property = null;
console.log(objA.property, pointer1.property, pointer2.property);









