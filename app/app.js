class TodoApp extends HTMLElement {

    constructor() {
        super();
        this.updateElem();
    }

    connectedCallback() {
        let listen = this.getAttribute('listen');
        let events = listen.split(', ');
        self = this;
        events.forEach( function ( event ) {
            on( document, event, function () {
                self.updateElem();
            });
        });
    }

    updateElem() {
        this.innerHTML = this.render();
    }

    render() {
        return `
            <todo-modal_area></todo-modal_area>
            <todo-list listen="state_updated, tasks_updated"></todo-list>
            <todo-modal_list></todo-modal_list>
        `;
    }

}

customElements.define('todo-app', TodoApp );