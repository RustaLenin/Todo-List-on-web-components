export class TodoTask extends HTMLElement {

    constructor() {
        super();
        this.initModel();
        this.updateElement();
    }

    initModel() {
        let id = this.getAttribute('id');
        this.model = state.tasks[id];
    }

    updateElement() {
        this.innerHTML = this.render();
    }

    render() {
        let model = this.model;
        let id = this.getAttribute('id');
        let buffer = ``;

        buffer += `
            <span class="task_title">${ model.title}</span>
            <span class="task_description">${ model.description}</span>
            <span class="task_footer">
            
                <span class="task_status">${ model.status ? _(model.status) : 'Unknown'}</span>
            
                <span class="task_controls">
                    <todo-svg class="edit" svg-id="edit" onclick="state.actions.modalTask('${id}')"></todo-svg>
                    <todo-svg class="remove" svg-id="trash" onclick="state.actions.removeTask('${id}')"></todo-svg>
                </span>
            </span>
        `;

        return buffer;
    }

}