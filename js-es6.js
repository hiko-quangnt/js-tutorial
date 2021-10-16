// var
// let, const
// csope
let i = 20; // global
if (true) {
    let i = 10 // local
}
function demo () {
    let j = 'Quang';
}

console.log(i)
console.log('------------ Closures function -----------------')
// closures => closure là 1 hàm được tạo ra và return ở trong 1 hàm khác, nó có thể truy cập và thao tác với biến của hàm cha.
// Initiate counter
// let counter = 0; // global

// // Function to increment counter
// function add() {
//     let counter = 0; // local
//     counter += 1; // counter = counter + 1; counter -= 1 <=> counter = counter -1
// }

// // call add() 3 times
// add(); 1
// add(); 1
// add(); 1

// // The counter should now be 3
// console.log(counter);


// function add() {
//     let counter = 0; // local
//     counter += 1; // counter = counter + 1; counter -= 1 <=> counter = counter -1
//     return counter;
// }

// // call add() 3 times
// add();
// add();
// add();
// console.log(add());

const add = (function() {
    let counter = 0;
    return function() { // closure
        counter += 1;
        return counter;
    }
    // return counter;
})();
console.log(add)

add(); // counter = 1
add(); // counter = 2
console.log(add()); // counter = 3

// kTra() => checkVar() Động từ
console.log('------------ Callback function -----------------')
// Callback function // Hàm gọi lại -> Nó sẽ gọi lại sau => Là 1 hàm được gọi thông qua 1 tham số (parameter)
// function demo (par1, par2) {
//     // Gọi callback function par2();
// }
function myDisplayer(text) {
    document.getElementById("demo").innerHTML = text;
}
function myCalculator(num1, num2) {
    return num1 + num2;
}

let result = myCalculator(5, 10); // 15
myDisplayer(result)

// Vấn đề (Issue) -> Mỗi lần tính toán va in kq đều phải gọi 2 hàm.

// Cách 2:
function myCalculatorTwo(num1, num2) {
    let result = num1 + num2;
    myDisplayer(result);
}
myCalculatorTwo(10, 15)

// Cách 3: Áp dụng callback function
function myCalculatorThree(num1, num2, myCallbackFunction = null) {
    let result = num1 + num2; // 150
    if (typeof myCallbackFunction === 'function') {
        myCallbackFunction(result); // myDisplayer(result)
    }
    return result
}
console.log(myCalculatorThree(50, 100, myDisplayer));

console.log('-------------- map, filter, reduce -----------------')
// map ->  lặp qua mỗi phần tử và trả về array đủ các phẩn trong Array đã xử lý
const arrDemo = [1,2,3,4,5]
console.log(arrDemo.map(function (value) {
    return value * 2
    // 1 * 2
    // 2 * 2
    // 3 * 2
    // 4 * 2
    // 5 * 2
}))
// [
//     {
//         key: 1,
//         value: 'quang'
//     }
// ]
// filter -> Trả ra các kết quả tìm kiếm đúng
console.log(arrDemo.filter(function (value) {
    return value > 2
}))

// reduce -> Trả về kết quả, Nêú array rỗng thì lỗi
console.log(arrDemo)
console.log(arrDemo.reduce(function (prev, current) {
    console.log('prev:' + prev,'current:' + current)
    return prev + current // -> Nó sẽ là prev (kết qủa) của vòng lặp tiếp theo
}))

// template string
const jsText = 'Javscript'
const stringNormal = 'Học ' + jsText + ' rất là thú vị.'
console.log(stringNormal)
console.log(`Học ${jsText} rất là thú vị luôn.`)

// Arrow function
function demoFunc(par1, par2) {
    console.log('demoFunc')
}
const arrFunc = (par1, par2) => {
    console.log('Arrow func')
}
const arrFuncOneParam = par1 => {
    //aosjdpoasdipoasid
    // paoksdpoaispdia
    // ;alksd;laks;ld
    console.log('Arrow func')
}

const arrFuncOneLine = (par1, par2) => par1 + par2 // function () { return par1 + par2 } 
console.log(arrFuncOneLine(2, 5))

console.log(arrDemo.filter(value => {
    return value > 2
}))