export function debounce( func, delay){
    let lastTimeout;
    return function(){

        if( lastTimeout ) {
            clearTimeout( lastTimeout );
        }

        let args = Array.from( arguments );
        lastTimeout = setTimeout(function(){
            func.apply(null, args);
        }, delay);
    }
}

export function validate( elem ) {
    let value = elem.value;
    let comment = elem.closest('.todo_field').querySelector('.comment');
    if ( !value || value.length > 160 ) {
        elem.classList.add('error');
        comment.innerHTML = _('Fill this field correctly please');
    } else {
        elem.classList.add('success');
        comment.innerHTML = _('Seems ok');
    }
}

export const delayValidate = debounce( validate, 2400);

export function validateInput( elem ) {
    let comment = elem.closest('.todo_field').querySelector('.comment');
    if ( elem.classList.contains('success') ) {
        elem.classList.remove('success');
    }
    if ( elem.classList.contains('error') ) {
        elem.classList.remove('error');
    }
    comment.innerHTML = _('No more 160 symbols please');
    delayValidate( elem );
}

