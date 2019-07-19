export function addTask( data ) {
    let id = uniqID();
    state.tasks[id] = data;
    document.dispatchEvent( state.events.tasksUpdate );
    return true;
}

export function updateTask( id, data = {} ) {
    if ( state.tasks[id] ) {
        Object.assign( state.tasks[id], data );
        document.dispatchEvent( state.events.tasksUpdate );
        return true;
    } else {
        return false;
    }
}

export function removeTask( id ) {
    if ( state.tasks[id] ) {
        let result = confirm( _('Are you sure, you want to delete this task?') );
        if ( result ) {
            delete state.tasks[id];
            document.dispatchEvent( state.events.tasksUpdate );
        }
    }
}