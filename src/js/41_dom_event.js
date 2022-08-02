const btn = document.querySelector('#btn')
const h1 = document.querySelector('h1')

function changeColor() {
    h1.style.color = 'red'
        // alert('hello');
}

function changeBackgroundColor() {
    h1.style.backgroundColor = 'green'
        // alert('hello');
}
btn.addEventListener('click', changeColor)
btn.addEventListener('click', changeBackgroundColor)
    // btn.removeEventListener('click', changeBackgroundColor)