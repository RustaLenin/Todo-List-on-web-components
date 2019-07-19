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
                        <span class="collapse_modal" onclick="${id}.collapse()">
                            <svg id="minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 83 83">
                                <path d="M81,36.166H2c-1.104,0-2,0.896-2,2v6.668c0,1.104,0.896,2,2,2h79c1.104,0,2-0.896,2-2v-6.668
                                    C83,37.062,82.104,36.166,81,36.166z"/>
                            </svg>
                        </span>
                        <span class="close_modal" onclick="${id}.close()">
                            <svg id="close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41.756 41.756">
                                <path d="M27.948,20.878L40.291,8.536c1.953-1.953,1.953-5.119,0-7.071c-1.951-1.952-5.119-1.952-7.07,0L20.878,13.809L8.535,1.465
                                    c-1.951-1.952-5.119-1.952-7.07,0c-1.953,1.953-1.953,5.119,0,7.071l12.342,12.342L1.465,33.22c-1.953,1.953-1.953,5.119,0,7.071
                                    C2.44,41.268,3.721,41.755,5,41.755c1.278,0,2.56-0.487,3.535-1.464l12.343-12.342l12.343,12.343
                                    c0.976,0.977,2.256,1.464,3.535,1.464s2.56-0.487,3.535-1.464c1.953-1.953,1.953-5.119,0-7.071L27.948,20.878z"/>
                            </svg>
                        </span>
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