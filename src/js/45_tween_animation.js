const { Tween } = require("jquery");

document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector("#btn");
    const ta = new TweenTextAnimation('.tween-animate-title');
    const ta2 = new TextAnimation('.animate-title');
    setTimeout(() => {
        ta.animate();
        ta2.animate();
    });
});
class TextAnimation {
    constructor(el) {
        this.DOM = {}
        this.DOM.el = document.querySelector(el);
        this.chars = this.DOM.el.innerHTML.trim().split("");
        this.DOM.el.innerHTML = this._splitText();
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
        this.DOM.el.classList.add('inview');
    }
}
class TweenTextAnimation extends TextAnimation {
    constructor(el) {
        super(el);
        this.DOM.chars = this.DOM.el.querySelectorAll('.char');
    }

    animate() {
        this.DOM.el.classList.add('inview');
        this.DOM.chars.forEach((c, i) => {
            TweenMax.to(c, .6, {
                ease: Back.easeOut,
                delay: i * .05,
                startAt: { y: '-50%', opacity: 0 },
                y: '0%',
                opacity: 1
            })
        });
    }
}