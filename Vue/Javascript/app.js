// export해서 사용하는 역할

// import 해놓고 사용 안 하면 vue-cli에서는 오류 발생!!
// import{ PLAYERS, MAX_SIZE, add, obj }from './export.js'

// console.log(PLAYERS);
// console.log(MAX_SIZE);
// console.log(add (5,7));
// console.log (obj.template);

// import MAX_SIZE from './export.js';
// console.log(MAX_SIZE);

// import obj2 from './export.js';
// console.log(obj2);
// obj2.log();

// console.log(obj2.data().num)

import obj from './export.js';
let {template} = obj;   // ES6 -->  Destructuring 구조분해할당
console.log(template);