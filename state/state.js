let state = {};

if ( Object.keys( state ).length === 0 ) {
    state.modals = {};
    state.actions = {};
    state.events = {};
    state.themes = {};
    state.locales = {};
    state.tasks = {};
}

window.state = state;

state.events.stateUpdate = new Event('state_updated');
state.events.modalsUpdate = new Event('modals_updated');
state.events.tasksUpdate = new Event('tasks_updated');

// let saved_modals = localStorage.getItem('modals');
// if ( saved_modals ) {
//      Object.assign( state.modals, JSON.parse( saved_modals ) );
// }
let saved_tasks =  localStorage.getItem('tasks');
if ( saved_tasks ) {
    Object.assign( state.tasks, JSON.parse( saved_tasks ) );
}

// on( document, 'modals_updated', function () {
//     console.log('modals to storage');
//     localStorage.setItem('modals', JSON.stringify(state.modals) );
// });
on( document, 'tasks_updated', function () {
    localStorage.setItem('tasks', JSON.stringify(state.tasks) );
});