import './sub';
import './app.scss';


const init = async() => {

    console.log("this is a app.js file");
    await asyncFn();
};
async function asyncFn() {
    console.log([1, 2, 3].includes(0));
    console.log("I'm async function");
}
init();