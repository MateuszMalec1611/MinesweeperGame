import {UI} from './UI.js';

export class CustomOptions extends UI {
    #minRows = 1;
    #minCols = 8;
    #minMines = 1;

    #optionsMenu = this.getElement(this.UiSelectors.optionsMenu);
    #error = this.getElement(this.UiSelectors.errorMenu);
    rowsInput = this.getElement(this.UiSelectors.inputRows);
    colsInput = this.getElement(this.UiSelectors.inputCols);
    minesInput = this.getElement(this.UiSelectors.inputMines);
    addBtn = this.getElement(this.UiSelectors.formAdd);
    cancelBtn = this.getElement(this.UiSelectors.formCancel);
    revealMinesBtn = this.getElement(this.UiSelectors.formRevealMines);

    toggleMenu() {
        this.#optionsMenu.classList.toggle('hide');
        this.#error.textContent = '';
    }

    checkInputs() {
        const rowsAmount = this.rowsInput.value;
        const colsAmount = this.colsInput.value;
        const minesAmount = this.minesInput.value;
        const maxMinesAmount = rowsAmount * colsAmount - 1;

        if(rowsAmount < this.#minRows || colsAmount < this.#minCols || minesAmount < this.#minMines || minesAmount > maxMinesAmount){
            this.#showError()
            return false;
        }
        return true;
    }

    #showError() {    
        this.#error.textContent = 'Incorrect value!';
    }
}