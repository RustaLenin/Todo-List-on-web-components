export function _( key ) {
    let locale = state.locales.currentLocale;
    return state.locales[locale][key] ? state.locales[locale][key] : key;
}

export function switchLocale( elem ) {
    let switcher = elem.closest('.switch_locale ');
    if ( switcher.classList.contains('en') ) {
        switcher.classList.remove('en');
        switcher.classList.add('ru');
        state.locales.currentLocale = 'ru';
    } else if ( switcher.classList.contains('ru') ) {
        switcher.classList.remove('ru');
        switcher.classList.add('en');
        state.locales.currentLocale = 'en';
    }
    document.dispatchEvent( state.events.localeChanged );
}

export function getBrowserLocale() {
    let locale = '';

    if ( typeof navigator.languages !== 'undefined' ) {
        locale = navigator.languages[0];
    } else if ( typeof navigator.language !== 'undefined' ) {
        locale = navigator.language
    } else {
        locale = 'en';
    }

    return locale.substring(0, 2);

}