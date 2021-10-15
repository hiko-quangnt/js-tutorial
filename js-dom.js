
    // DOM: document object modal

// JavaScript can change all the HTML elements in the page
// JavaScript can change all the HTML attributes in the page
// JavaScript can change all the CSS styles in the page
// JavaScript can remove existing HTML elements and attributes
// JavaScript can add new HTML elements and attributes
// JavaScript can react to all existing HTML events in the page
// JavaScript can create new HTML events in the page

// .innerHTML = '123123123'

// document -> Đại diện cho trang web, bao quát tất cả các thành phần
console.log(document.getElementById('app'))
console.log(document.getElementsByTagName('p'))
const elementAppTitle = document.getElementsByClassName('app-title')
console.log(elementAppTitle)
elementAppTitle[0].innerHTML = 'Thay đổi text'

//Event handler -> Là những sự kiện có sẵn của JS
// const app = document.getElementById('app')
function handleEventOnmouseLeave(object) {
    console.log('mouse leave', object)
}
// app.addEventListener('mouseenter', function () {
//     handleEventOnmouseLeave()
// })





