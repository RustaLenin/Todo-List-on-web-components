import { en } from './en.js'
import { ru } from './ru.js'
import { _, switchLocale, getBrowserLocale } from './locals.js'

if ( typeof state.locales === 'undefined' ) {
    state.locales = {};
}

let saved_locale = localStorage.getItem('locale');

state.locales.currentLocale = saved_locale ? saved_locale : getBrowserLocale();
state.locales.ru = ru;
state.locales.en = en;
state.events.localeChanged = new Event('change_locale');

window._= _;
window.state.actions['switchLocale'] = switchLocale;

on(document, 'change_locale', function () {
    localStorage.setItem('locale', state.locales.currentLocale );
});

