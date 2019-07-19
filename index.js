import { switchTheme } from './themes/themes.js'
import { forEach, uniqID, fadeAndDelete, $, $a, on, off } from './sugar/js.js';

forEach();
window.uniqID = uniqID;
window.fadeAndDelete = fadeAndDelete;
window.switchTheme = switchTheme;
window.$ = $;
window.$a = $a;
window.on = on;
window.off = off;