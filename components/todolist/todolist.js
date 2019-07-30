export class TodoList extends HTMLElement{

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
        let buffer = ``;
        buffer += this.renderHeader();
        buffer += this.renderList();
        return buffer;
    }

    renderHeader() {
        return `<div class="header">
                    <span class="title">${_('List')}</span>
                    <todo-svg svg-id="plus" class="add_task" onclick="state.actions.modalTask()"></todo-svg>
                </div>`;
    }

    renderList() {
        let tasks = state.tasks;
        let buffer = `<div class="list">`;
        if ( Object.keys(tasks).length > 0 ) {
            tasks.forEach( function ( id, data) {
                buffer += `<todo-task id="${id}"></todo-task>`;
            });
        } else {
            buffer += `
            <div class="null_task" onclick="state.actions.modalTask(null)">
                <span class="null_icon">
                    <todo-svg svg-id="plus"></todo-svg>
                </span>
                <span class="null_title">${_('Add your first task')}</span>
            </div>`
        }

        buffer += `</div>`;
        return buffer;
    }

}