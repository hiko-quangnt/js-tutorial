console.log('-------------- ES 6 -------------')
// // var
// // let, const
// // csope
// let i = 20; // global
// if (true) {
//     let i = 10 // local
// }
// function demo () {
//     let j = 'Quang';
// }
// console.log(i)
console.log('-------------- template string -------------')
// template string
const jsText = 'Javscript'
const stringNormal = 'Học ' + jsText + ' rất là thú vị.'
console.log(stringNormal)
console.log(`Học ${jsText} rất là thú vị luôn.`)

console.log('-------------- Arrow function -------------')
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

const arrDemo = [1,2,3,4,5]
console.log(arrDemo.filter(value => {
    return value > 2
}))

console.log('-------------- Default Parameter Values -------------')
function demo (x, y = 10) {
    console.log(x, y)
}
demo(20)

console.log('-------------- Rest Parameter -------------')
function demoRestPar(par1, par2, ...lastPar) {
    console.log(par1)
    console.log(par2)
    console.log(lastPar)
}
demoRestPar(1, 2, 3, 4, 5, 6)

console.log('-------------- Destructing -------------')
const arrMoto = ['Yamaha', 'Honda', 'Liberty']
// const yamaha = arrMoto[0]
// const honda = arrMoto[1]

const [yamaha, , liberty] = arrMoto;
console.log(yamaha, liberty)

const student = {
    name: 'Quang',
    age: 26,
    like: 'play game',
    study: {
        math: '123',
        program: '321'
    }
}
const {name, age, like} = student
console.log(name, age, like)

const {math, program} = student.study
console.log(math, program)

console.log('-------------- Spread Operator -------------')
// Merge array: concat()
const arr1 = ['1','2','3']
const arr2 = ['4','5','6']
const newArr = arr1.concat(arr2)
console.log(newArr)

const number1 = ['1','2','3']
const number2 = ['4','5','6']
const newNumber = [...number1, ...number2]
console.log(newNumber)

const object1 = {
    name: 'Yamaha Exciter',
    color: 'red'
}
const object2 = {
    type: 'sport',
    year: '2021',
    color: 'blue'
}
const newObject = {...object1, ...object2}
console.log(newObject)

console.log('----------------------------------------------')
console.log('----------------------------------------------')
console.log('------------- Javascript Nâng cao ------------')

console.log('------------ Closures function -----------------')
// closures => closure là 1 hàm được tạo ra và return ở trong 1 hàm khác, nó có thể truy cập và thao tác với biến của hàm cha.
// Initiate counter
let counter = 0; // global

// Function to increment counter
// function add() {
//     let counter = 0; // local
//     counter += 1; // counter = counter + 1; counter -= 1 <=> counter = counter -1
// }

// // call add() 3 times
// add(); 1
// add(); 1
// add(); 1

// The counter should now be 3
// console.log(counter);


// // function add() {
// //     let counter = 0; // local
// //     counter += 1; // counter = counter + 1; counter -= 1 <=> counter = counter -1
// //     return counter;
// // }

// // // call add() 3 times
// // add();
// // add();
// // add();
// // console.log(add());

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
const arrDemoTwo = [1,2,3,4,5]
console.log(arrDemoTwo.map(function (value) {
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
console.log(arrDemoTwo.filter(function (value) {
    return value > 2
}))

// reduce -> Trả về kết quả, Nêú array rỗng thì lỗi
console.log(arrDemoTwo)
console.log(arrDemoTwo.reduce(function (prev, current) {
    console.log('prev:' + prev,'current:' + current)
    return prev + current // -> Nó sẽ là prev (kết qủa) của vòng lặp tiếp theo
}))

console.log('-------------- JSON - JavaScript Object Notation -------------')
// JSON // JavaScript Object Notation XML
const demoJson = '{"key": "value", "key2": "value2"}'

console.log('-------------- Synchoronus (Đồng bộ) và Asynchoronus (Bất đồng bộ) -------------')
// Synchoronus (Đồng bộ) -> Làm việc a, b, c => làm việc a xong, qua việc b, việc b xong qua c
// Lợi ích: Công việc chạy theo 1 thứ tự nhất định, nó sẽ ít gặp lỗi và đạt hiệu quả nhất định
// Hạn chế: Cứ lặp đi lặp lại 1 quy trình trong công việc và ko tối ưu trong 1 số trường hợp

// Ví dụ: Nhà máy chế biến gà
// a: sơ chế, b: chế biến, c: đóng gói
// Chạy: Đưa gà 1 vào, đi qua từng công việc
// Con gà 1 sơ chế xong, qua (b) chế biến
// Con gà 2 sơ chế xong, chưa qua được (b) chế biến (Vì đang chế biến gà 1)
// Con gà 3,4,5 ko được đưa vào (a) sơ chế (Vì con gà 2 đã sơ chế xong nhưng chưa được vào chế biến)

// Asynchoronus -> Ngược lại synchoronus, chương trình có thể bỏ qua, tạm dừng 1 bước hoặc 1 công đoạn nào đó.
// Con gà 3,4,5 ko được đưa vào (a) sơ chế (Vì con gà 2 đã sơ chế xong nhưng chưa được vào chế biến) -> Con gà 2 qua 1 bên, xử lý tiếp con gà 3, con gà 3 xong xử lý tiếp con gà 4, khi nào chế biến gà 2 xong sẽ đưa gà 3 vào chế biến tiếp
// Lợi ích: Xử lý nhiều công việc mà ko cần phải đợi
// Hạn chế: Gây ra một số lỗi và khó kiểm soát nếu ko quản lý chặt chẽ

// setTimeout, setInterval
// setTimeout: gọi chương trình 1 lần duy nhất sau thời gian quy định
// setInterval: gọi chương trình sau khoãng thời gian quy định (mãi mãi)
// setTimeout(() => {
//     alert('Hello, run code after 3s')
// }, 3000)
const demoInterval = setInterval(() => {
    console.log('time running.........')
}, 2000)
// Ví dụ show quảng cáo sau mỗi phút
// Khi user bam nut tat quang cao, chay clearInterval tat show quang cao sau 1p
// clearTimeout, clearInterval
clearInterval(demoInterval)

console.log('------------ Promise -----------------')
// Lời hứa, tôi hứa sẽ trả về 1 kết quả (Sau 1 thời gian)
// Xử lý bất đồng bộ
const numberDemo = 4
let myPromise = new Promise((resolve, reject) => {
    if (numberDemo === 5) {
        resolve('haha');
    } else {
        reject('error')
    }
})
myPromise.then(
    function(value) {
        console.log('Hàm chạy đúng: ')
        console.log(value)
    }
    // function(error) {
    //     console.log('Hàm chạy sai rồi: Reject')
    //     console.log(error)
    // }
).catch(function(error) {
    console.log('Hàm chạy sai rồi: Catch')
    console.log(error)
})
//myPromise1 -> myPromise2 -> myPromise3 // Nếu ko handle kỹ sẽ dễ dàng dẫn đến Callback hell

console.log('------------ Async, await -----------------')
// Async, await
// const result = await promise
async function demoApiCall() {
    let myDemoPromise = new Promise(function(resolve) {
        setTimeout(function() {
            resolve({
                code: 200,
                data: {
                    value: 'I love you'
                }
            })
        }, 3000)
    })
    console.log('Bắt đầu call API')
    
    
    // const result = await myDemoPromise // DỨng ở đây
    // console.log('Sau khi call API xong', result)
    // if (result.code === 200) {
    //     document.getElementById('demo').innerHTML = result.data.value
    // } else {
    //     alert('Lỗi rồi')
    // }
    try {
        // Excute code -> Bất kỳ lỗi nào trong này, nó đều sẽ nhảy vào catch
        const result = await myDemoPromise // Đợi ở đây 'apiaquang.com/api/v1/getIloveyou'
        console.log('Sau khi call API xong', result)
        if (result.code === 200) {
            document.getElementById('demo').innerHTML = result.data.value
        } else {
            alert('Lỗi rồi')
        }
    } catch(e) {
        console.log(e)
        alert('Lỗi rồi')
        // Xử lý code lỗi
    }
}

demoApiCall();


