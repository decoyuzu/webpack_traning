// const todos = [{
//         id: 1,
//         title: 'Go to school',
//         completed: true
//     },
//     {
//         id: 2,
//         title: 'Go to museam',
//         completed: true
//     },
//     {
//         id: 3,
//         title: 'Go to shopping',
//         completed: false
//     }
// ]

// // for (let i in todos) {
// //     if (todos[i].completed === true) {
// //         console.log(i, todos[i].title);
// //     }
// // }
// for (let todo of todos) {
//     if (todo.completed === true) {
//         console.log(todo.title);
//     }
// }

// const hello = (name = 'Tom', age = 2) => console.log('hello' + name + age);

// hello('Code Mafia')
// hello()

// const arry = [1, 2, 3, 4, 5]
// arry.forEach(function(value) {
//     console.log(value);
// })
// const arry2 = [1, 2, 3, 4, 5]
// arry2.forEach(value => console.log(value));

// コールバック関数
// function hello(callback, lastName) {
//     console.log(callback)
//     console.log('hello ' + callback(lastName))
// }

// function getName() {
//     return 'Code Mafia'
// }

// function getFirstName() {
//     return 'Code'
// }

// hello(function(name) {
//     return 'Code ' + name;
// }, 'Mafia');

// function doSomething(a, b, callback) {
//     const result = callback(a, b);
//     console.log(result)
// }

// function multiply(a, b) {
//     return a * b
// }

// function plus(a, b) {
//     return a + b;
// }

// doSomething(2, 2, multiply);
// doSomething(2, 3, plus);

// コールバック関数とループ
// const arry = [1, 2, 3, 4, 5];

// function forEach(ary, callback) {
//     for (let i = 0; i < ary.length; i++) {
//         callback(ary[i]);
//     }

// }

// function log(val) {
//     console.log(val);
// }

// function double(val) {
//     val = val * 2
//     log(val);
// }

// forEach(arry, function(val) {
//     val = val * 2
//     log(val);
// });

// 配列のforeachメソッド

// const arry = [1, 2, 3, 4, 5]
// arry.forEach((val, i, ary) => {
//     console.log(val, i, ary);
// })

// for (let i = 0; i < arry.length; i++) {
//     const v = arry[i];
//     console.log(v);
// }

// 配列とreducerメソッド
// const arry = [1, 2, 3, 4, 5];
// arry.reduce((accu, curr) => {
//     console.log(accu, curr);
//     // return accu * curr;
// }, 10);

// const str = 'animation';
// const strArry = str.split('');
// // console.log(strArry)

// const result = strArry.reduce((accu, curr) => {
//     return `${accu}<${curr}>`;
//     // return accu + '<' + curr + '>';
// }, '')
// console.log(result)

// reduce関数を作ってみよう
const str = 'animation';
const strArry = str.split('');

function tag(accu, curr) {
    // console.log(accu, curr);
    return `${accu}<${curr}>`;
}


function reduce(arry, callback, defaultValue) {
    let accu = defaultValue;
    for (let i = 0; i < arry.length; i++) {
        let curr = arry[i];
        accu = callback(accu, curr);
    }
    return accu;

}

const result = reduce(strArry, tag, "");
console.log(result);