document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector("#btn");
    const ta = new TextAnimation('.animate-title');
    const ta2 = new TextAnimation('.animate-title-2');
    setTimeout(() => {
        ta.animate();
        ta2.animate();
        btn.addEventListener('click', ta.animate.bind(ta))
        btn.addEventListener('click', ta2.animate.bind(ta2))
    }, 1000);
});
class TextAnimation {
    constructor(el) {
        this.el = document.querySelector(el);
        this.chars = this.el.innerHTML.trim().split("");
        this.el.innerHTML = this._splitText();
        console.log(this.el.innerHTML)
    }
    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    log() {
        console.log(this.el);
    }
    animate() {
        this.el.classList.toggle('inview');
    }
}