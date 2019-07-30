/**
 * Example of state for modal:
 {
    'show': true | false,
    'title': text,
    'submit_text': text,
    'content' function,
    'onsubmit': function
 }
 **/

export class TodoModal extends HTMLElement {

    constructor( id = null ) {
        super();
        if ( id ) { this.setAttribute('id', id ) }
        this.initState();
        this.updateElem();
    }

    initState() {
        let id = this.getAttribute('id');
        this.state = state.modals.list[id];
    }

    updateClass() {
        let state = this.state;
        if ( state.show ) {
            this.classList.add('show');
        } else {
            if ( this.classList.contains('show') ) {
                this.classList.remove('show');
            }
        }
    }

    updateElem() {
        this.updateClass();
        this.innerHTML = this.render();
    }

    render() {
        let buffer = ``;
        buffer += this.renderHeader();
        buffer += this.renderBody();
        buffer += this.renderFooter();
        return buffer;
    }

    renderHeader() {
        let id = this.getAttribute('id');
        let state = this.state;
        return `<div class="header">
                    
                    <span class="title">
                        ${ _(state.name) } ${ state.title }
                    </span>

                    <div class="control">
                        <todo-svg svg-id="minus" class="collapse_modal" onclick="${id}.collapse()"></todo-svg>
                        <todo-svg svg-id="close" class="close_modal" onclick="${id}.close()"></todo-svg>
                    </div>

                </div>`;
    }

    renderBody() {
        let state = this.state;
        let content = ``;
        if (state.content && state.data) {
            content = state.content(state.data);
        } else if (state.content) {
            if (typeof state.content === 'function') {
                content = state.content();
            } else {
                content = state.content;
            }
        }

        return `
            <div class="body">
                ${ content }
            </div>`
    }

    renderFooter() {
        let state = this.state;
        return `<div class="footer">
                    <span class="todo_submit" onclick="${state.onsubmit ? state.onsubmit : '' }">${state.submit_text}</span>
                </div>`
    }

    collapse() {
        this.state.show = false;
        state.modals.show = false;
        state.modals.currentModal = '';
        this.updateClass();
        document.dispatchEvent( state.events.modalsUpdate );
    }

    close() {
        let id = this.getAttribute('id');
        delete state.modals.list[id];
        state.modals.show = false;
        state.modals.currentModal = '';
        this.innerHTML = ' ';
        $('#'+id).remove();
        document.dispatchEvent( state.events.modalsUpdate );
    }

    show() {
        state.actions.collapseAllModals();
        this.state.show = true;
        state.modals.show = true;
        state.modals.currentModal = this.getAttribute('id');
        this.updateClass();
        document.dispatchEvent( state.events.modalsUpdate );
    }
}

export function newModal( model ) {
    state.actions.collapseAllModals();
    let id = window.uniqID();
    if ( !state.modals.list ) {
        state.modals.list = {};
    }
    state.modals.list[id] = model;
    let modal = new TodoModal( id );
    modal.setAttribute('id', id );
    $('todo-modal_area').prepend( modal );
    state.modals.show = true;
    state.modals.currentModal = id;
    document.dispatchEvent( state.events.modalsUpdate );
}