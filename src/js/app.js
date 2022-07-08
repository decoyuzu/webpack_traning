setTimeout(() => {
    import ('js/sub')
}, 2000);
import '@scss/app';
// import utils from '../utils';
// import { jQuery } from "jquery";;


const init = async() => {

    console.log("this is a app.js file");
    await asyncFn();
    utils.log('hello from app.js');
};
async function asyncFn() {
    console.log([1, 2, 3].includes(0));
    console.log("I'm async function");
    jQuery();
}
init();