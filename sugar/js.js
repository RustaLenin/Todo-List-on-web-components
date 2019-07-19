/**
 * Object.prototype.forEach() polyfill
 * https://gomakethings.com/looping-through-objects-with-es6/
 * @author Chris Ferdinandi
 * @license MIT
 */
export function forEach() {
    if (!Object.prototype.forEach) {
        Object.defineProperty(Object.prototype, 'forEach', {
            value: function (callback, thisArg) {
                if (this == null) {
                    throw new TypeError('Not an object');
                }
                thisArg = thisArg || window;
                for ( var key in this) {
                    if (this.hasOwnProperty(key)) {
                        callback.call(thisArg, key, this[key], this);
                    }
                }
            }
        });
    }
}

export function $( selector ) {
    return document.querySelector( selector );
}

export function $a( selector ) {
    return document.querySelectorAll( selector );
}

export function on( element, event, handler ) {
    return  element.addEventListener( event, handler );
}

export function off( element, event, handler) {
    return element.removeEventListener( event, handler );
}

export function uniqID( pr = '', en = false ) {

    let result;

    function seed( s, w ){
        s = parseInt(s, 10).toString(16);
        return w < s.length ? s.slice(s.length - w) :
            (w > s.length) ? new Array(1 + (w - s.length)).join('0') + s : s;
    }

    result = + pr + seed(parseInt(new Date().getTime() / 1000, 10), 8)
        + seed(Math.floor(Math.random() * 0x75bcd15) + 1, 5);

    if (en) { result += (Math.random() * 10).toFixed(8).toString(); }

    return 'id' + result;
}

export function fadeAndDelete( elem ) {
    elem.style = 'transition: 0.4s !important; visibility: hidden; opacity: 0;';
    setTimeout( function () {
        elem.remove();
    }, 400);

}