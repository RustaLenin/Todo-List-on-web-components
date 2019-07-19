export class TodoModalList extends HTMLElement {

    constructor() {
        super();
        this.initModel();
        this.updateElem();

    }

    connectedCallback() {
        let self = this;
        on( document, 'modals_updated', function () {
            self.updateElem();
        });
    }

    initModel(){
        this.model = window.state.modals.list;
        let model = this.model;
        if ( !model ) {
            model = {}
        }
    }

    updateElem() {
        this.innerHTML = this.render();
    }

    render() {

        let model = this.model;

        let buffer = ``;
        model.forEach( function ( key, modal ) {
            let current = ( window.state.modals.currentModal === key );
            buffer += `
                <div class="collapsed_modal ${ current ? 'current': ''}">
                    <span class="title">${ _(modal.name) } ${ modal.title }</span>
                    <span class="controls">
                        <span class="switch_modal" onclick="${key}.show();">
                            <svg id="expand" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 540.09 540.09">
                                <path d="M249.466,311.891l-20.349-20.35c-8.338-8.338-21.955-8.338-30.447,0L72.674,417.689v-107.1
                                    c0-11.857-9.715-21.496-21.497-21.496H22.49c-11.857,0-21.496,9.715-21.496,21.496v208.004c0,5.967,2.371,11.321,6.349,15.146
                                    c3.978,3.979,9.333,6.35,15.147,6.35h208.004c11.857,0,21.496-9.716,21.496-21.496v-28.688c0-11.857-9.715-21.497-21.496-21.497
                                    h-107.1l126.072-126.071C257.881,333.846,257.881,320.229,249.466,311.891z"/>
                                <path d="M532.746,6.35C528.768,2.372,523.412,0,517.598,0H309.596c-11.857,0-21.498,9.715-21.498,21.497v28.688
                                    c0,11.857,9.717,21.497,21.498,21.497h107.1L290.471,197.676c-8.34,8.339-8.34,22.032,0,30.447l20.348,20.349
                                    c8.34,8.339,22.033,8.339,30.447,0L467.414,122.4v107.1c0,11.857,9.717,21.497,21.496,21.497h28.688
                                    c11.857,0,21.498-9.716,21.498-21.497V21.573C539.018,15.529,536.57,10.174,532.746,6.35z"/>
                            </svg>
                        </span>
                        <span class="close_modal" onclick="${key}.close();">
                            <svg id="close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41.756 41.756">
                                <path d="M27.948,20.878L40.291,8.536c1.953-1.953,1.953-5.119,0-7.071c-1.951-1.952-5.119-1.952-7.07,0L20.878,13.809L8.535,1.465
                                    c-1.951-1.952-5.119-1.952-7.07,0c-1.953,1.953-1.953,5.119,0,7.071l12.342,12.342L1.465,33.22c-1.953,1.953-1.953,5.119,0,7.071
                                    C2.44,41.268,3.721,41.755,5,41.755c1.278,0,2.56-0.487,3.535-1.464l12.343-12.342l12.343,12.343
                                    c0.976,0.977,2.256,1.464,3.535,1.464s2.56-0.487,3.535-1.464c1.953-1.953,1.953-5.119,0-7.071L27.948,20.878z"/>
                            </svg>
                        </span>
                    </span>
                </div>`;
        });

        return buffer;

    }

}