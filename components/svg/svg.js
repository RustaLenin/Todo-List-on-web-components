import { SvgMap } from './map.js';

export class TodoSvg extends HTMLElement {

    constructor() {
        super();

        this.defaultIcon = 'cog';
        this.updateElem();
    }

    static get observedAttributes() {
        return [ 'svg-id' ];
    }

    attributeChangedCallback( name, oldValue, newValue ) {
        this.updateElem();
    }

    updateElem() {
        let icon = this.getAttribute('svg-id');
        this.innerHTML = SvgMap[icon] ? SvgMap[icon] : SvgMap[this.defaultIcon] ;
    }

}