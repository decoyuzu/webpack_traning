import { TextAnimation } from "./utils/text-animation";
import { ScrollObserver } from "./utils/scroll";


document.addEventListener('DOMContentLoaded', function() {

    const cb = function(el, isIntersecting) {
        if (isIntersecting) {
            el.classList.add('inview');
        }
    }

    const so = new ScrollObserver('.cover-slide', cb);
});