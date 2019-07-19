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
                    <span class="edit" onclick="state.actions.modalTask('${id}')">
                        <svg id="edit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 528.899 528.899">
                            <path d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981
                                c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611
                                C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069
                                L27.473,390.597L0.3,512.69z"/>
                        </svg>
                    </span>
                    <span class="remove" onclick="state.actions.removeTask('${id}')">
                        <svg id="trash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 21" >
                            <path d="M2.51109 19.9873C2.53479 20.5533 3.00056 21 3.56699 21H13.4331C13.9995 21 14.4653 20.5533 14.489 19.9873L15.1936 5.11362H1.80652L2.51109 19.9873ZM10.7319 8.80797C10.7319 8.57097 10.924 8.37875 11.1611 8.37875H11.8477C12.0847 8.37875 12.277 8.57092 12.277 8.80797V17.3056C12.277 17.5427 12.0848 17.7349 11.8477 17.7349H11.1611C10.9241 17.7349 10.7319 17.5428 10.7319 17.3056V8.80797ZM7.72753 8.80797C7.72753 8.57097 7.9197 8.37875 8.15675 8.37875H8.84333C9.08028 8.37875 9.27255 8.57092 9.27255 8.80797V17.3056C9.27255 17.5427 9.08043 17.7349 8.84333 17.7349H8.15675C7.91975 17.7349 7.72753 17.5428 7.72753 17.3056V8.80797ZM4.7231 8.80797C4.7231 8.57097 4.91526 8.37875 5.15231 8.37875H5.83894C6.07594 8.37875 6.26816 8.57092 6.26816 8.80797V17.3056C6.26816 17.5427 6.07599 17.7349 5.83894 17.7349H5.15231C4.91532 17.7349 4.7231 17.5428 4.7231 17.3056V8.80797Z"/>
                            <path d="M15.6627 1.08181H11.1111V0.221319C11.1111 0.0991179 11.0121 0 10.8898 0H6.1102C5.988 0 5.88893 0.0991179 5.88893 0.221319V1.08176H1.33732C0.971025 1.08176 0.674133 1.37871 0.674133 1.745V3.82848H16.3259V1.74505C16.3259 1.37876 16.029 1.08181 15.6627 1.08181Z"/>
                        </svg>
                    </span>
                </span>
            </span>
        `;

        return buffer;
    }

}