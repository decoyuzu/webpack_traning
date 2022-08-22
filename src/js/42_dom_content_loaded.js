// const h1 = document.querySelector('h1')
// h1.style.color = 'red'



const dcl = document.querySelector(".dcl")
const load = document.querySelector(".load")
console.log(load)


document.addEventListener('DOMContentLoaded', function() {
    const h1 = document.querySelector('h1')
    h1.style.color = ('red')
    dcl.classList.add('done')
})

window.addEventListener('load', function() {
    console.log('hello')
    const h1 = document.querySelector('h1')
    h1.style.color = ('red')
    load.classList.add('done')
})