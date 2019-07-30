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
                        <todo-svg svg-id="expand" class="switch_modal" onclick="${key}.show();"></todo-svg>
                        <todo-svg svg-id="close" class="switch_modal" onclick="${key}.close();"></todo-svg>
                    </span>
                </div>`;
        });

        return buffer;

    }

}