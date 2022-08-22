import { TextAnimation } from "./utils/text-animation"
import { ScrollObserver } from "./utils/scroll";

document.addEventListener('DOMContentLoaded', function() {
    const cb = function(el, isIntersecting) {
        if (isIntersecting) {
            const ta = new TextAnimation(el);
            ta.animate();
        }
    }
    const so = new ScrollObserver('.animate-title', cb, { once: false });
    // so.destory();
});