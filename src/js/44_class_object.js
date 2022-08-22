const obj = {
    first_name: 'Mafia',
    last_name: 'Code',
    printFullName: function() {
        console.log(this);
        const _that = this;
        window.setTimeout(function() {
            console.log(this);
        }.bind({ first_name: 'taro' }));
    }
}

obj.printFullName();


// const window = {
//     setTimeout: function(fn) {
//         fn();
//     }
// }

// class MyObj {
//     constructor() {
//         this.first_name = 'Mafia';
//         this.last_name = 'Code';
//     }
//     printFullName() {
//         console.log(this.first_name);
//     }
// }

// const obj2 = new MyObj();

// obj.printFullName();
// obj2.printFullName();