export class TodoModalArea extends HTMLElement {

    constructor() {
        super();
        this.initModel();
        let self = this;
        this.setAttribute( 'onmousedown', 'this.hide(event);' );
    }

    connectedCallback() {
        let self = this;
        on( document, 'modals_updated', function () {
            self.updateClass();
        });
    }

    disconnectedCallback(){
        let self = this;
        off( document, 'modals_updated', function () {
            self.updateClass();
        });
    }

    initModel(){
        this.state = window.state.modals;
        let state = this.state;
        if ( !state.list ) {
            state.list = {}
        }
        this.updateElem();
    }

    updateElem() {
        this.updateClass();
        this.innerHTML = this.render();
    }

    render() {

        let state = this.state;
        let buffer = ``;

        state.list.forEach( function ( key, val ) {
            buffer += `<todo-modal id="${key}"></todo-modal>`;
        });

        return buffer;

    }

    updateClass() {
        let state = this.state;
        if ( state.show ) {
            this.classList.add('show');
        } else {
            if ( this.classList.contains('show') ) {
                this.classList.remove('show')
            }
        }
    }

    show() {
        this.state.show = true;
        this.classList.add('show');
    }

    hide( event = null ) {
        if ( event ) {
            if ( event.target === this ) {
                this.state.show = false;
                collapseAllModals();
                if ( this.classList.contains('show') ) {
                    this.classList.remove('show')
                }
                document.dispatchEvent( state.events.modalsUpdate );
            }
        } else {
            this.state.show = false;
            collapseAllModals();
            if ( this.classList.contains('show') ) {
                this.classList.remove('show')
            }
            document.dispatchEvent( state.events.modalsUpdate );
        }
    }

}

export function collapseAllModals() {
    state.modals.currentModal = '';
    state.modals.list.forEach( function ( modal, model ) {
        if( $('#'+modal).classList.contains('show') ) {
            $('#'+modal).classList.remove('show');
        }
        model.show = false;
    });
}