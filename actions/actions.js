import { modalTask, submitModalTask } from './modal_task/modal_task.js';
import { validateInput, validate } from './validation/validation.js';
import { addTask, updateTask, removeTask } from './tasks/tasks.js';

let actions = {
    'modalTask': modalTask,
    'submitModalTask': submitModalTask,
    'validateInput': validateInput,
    'validate': validate,
    'addTask': addTask,
    'updateTask': updateTask,
    'removeTask': removeTask
};

Object.assign( state.actions, actions );