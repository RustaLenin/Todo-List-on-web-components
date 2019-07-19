import { TodoHeader } from './header/header.js'
import { TodoList } from './todolist/todolist.js'
import { TodoModalArea, collapseAllModals } from './modal/area.js'
import { TodoModal, newModal } from './modal/modal.js'
import { TodoModalList } from './modal/list.js';
import { TodoTask } from './todolist/task.js';

customElements.define('todo-header', TodoHeader );
customElements.define('todo-list', TodoList );
customElements.define('todo-modal_area', TodoModalArea );
customElements.define('todo-modal_list', TodoModalList );
customElements.define('todo-modal', TodoModal );
customElements.define('todo-task', TodoTask );

let actions = {
    'newModal': newModal,
    'collapseAllModals': collapseAllModals,
};

Object.assign( state.actions, actions );