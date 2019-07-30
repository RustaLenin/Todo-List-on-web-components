export class TodoHeader extends HTMLElement{

    constructor(){
        super();
        this.updateElem();
    }

    updateElem() {
        this.innerHTML = this.render();
    }

    render() {

        return `
            <div class="logo">ToDo</div>
            <div class="controls">
                <span class="switch_locale ${ state.locales.currentLocale}">
                    <span class="text en">En</span>
                    <span class="switcher" onclick="state.actions.switchLocale( this );"></span>
                    <span class="text ru">Ru</span>
                </span>
                <todo-svg svg-id="light" class="switch_light" onclick="switchTheme()"></todo-svg>
            </div>
        `;

    }

}