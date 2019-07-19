import { regular, dark } from './css.js';

const themes = {
    'regular': regular,
    'dark': dark
};

export function insertTheme( theme ) {
    let currentTheme = document.createElement('div');
    currentTheme.classList.add('todo_theme');
    currentTheme.innerHTML = themes[theme]();
    document.body.prepend( currentTheme );
    window.currentTheme = theme;
}

export function switchTheme() {
    let currentTheme = window.currentTheme;
    let newTheme = '';
    if ( currentTheme === 'regular') {
        newTheme = 'dark';
    } else {
        newTheme = 'regular';
    }
    $('.todo_theme').innerHTML = themes[newTheme]();
    window.currentTheme = newTheme;
    localStorage.setItem( 'colorTheme', newTheme );
}

let savedTheme = localStorage.getItem('colorTheme');
insertTheme( savedTheme ? savedTheme : 'regular' );