export function modalTask( id = null ) {

    let modalState = {
        'show': true,
        'name': id ? 'Edit task' : 'New task',
        'title': id ? `${state.tasks[id].title}` : '',
        'onsubmit': `state.actions.submitModalTask( ${id ? '`'+id+'`' : null }, this )`,
        'submit_text': _('Submit task'),
        'content': modalTaskContent,
        'data': id ? id : '',
    };

    modalState['data'] = id ? id : '';

    state.actions.newModal( modalState );
}

function modalTaskContent( id = null) {

    let task_data = {};

    if ( state.tasks[id] ) {
        task_data = state.tasks[id];
    }

    return `
        <div class="todo_field">
            <span class="label">${_('Title of the task')}</span>
            <input 
                class="todo_input" 
                type="text" name="title" 
                value="${task_data.title ? task_data.title : ''}"
                placeholder="Cool Task" 
                oninput="state.actions.validateInput( this )" 
                onfocusout="state.actions.validate( this )">
            <span class="comment">${_('No more 160 symbols please')}</span>
        </div>
        <div class="todo_field">
            <span class="label">${_('Description of a task')}</span>
            <textarea class="todo_input" placeholder="Make the coolest thing ever" name="description">${task_data.description ? task_data.description : ''}</textarea>
        </div>
        <div class="todo_field">
            <span class="label">${_('Choose status of a task')}</span>
            <select class="todo_input" name="status">
                <option value="Backlog"     ${ isSelect( task_data.status, 'Backlog') }   >${_('Backlog')}</option>
                <option value="ToDo"        ${ isSelect( task_data.status, 'ToDo') }      >${_('ToDo')}</option>
                <option value="In progress" ${ isSelect( task_data.status, 'In progres') }>${_('In progress')}</option>
                <option value="In review"   ${ isSelect( task_data.status, 'In review') } >${_('In review')}</option>
                <option value="Done"        ${ isSelect( task_data.status, 'Done') }      >${_('Done')}</option>
            </select>
        </div>
    `;
}

function isSelect( currentStatus = '', status ) {
    if ( currentStatus === status ) {
        return 'selected';
    } else {
        return ''
    }
}

export function submitModalTask( id = null, elem ) {
    let data = {};
    let valid = true;
    let modal = elem.closest('todo-modal');
    modal.querySelectorAll('.todo_input').forEach( function ( input ) {
        data[input.name] = input.value;
        if ( input.classList.contains('error') ) {
            valid = false;
        }
    });
    if ( valid ) {
        let result;
        if ( !id ) {
            result = state.actions.addTask( data );
        } else {
            result = state.actions.updateTask( id, data );
        }
        if ( result ) {
            modal.close();
        }
    }
}