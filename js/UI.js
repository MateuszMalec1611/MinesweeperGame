export class UI {
    UiSelectors = {
        board: '[data-board]',
        cell: '[data-cell]',
        counter: '[data-counter]',
        timer: '[data-timer]',
        resetButton: '[data-button-reset]',
        easyButton: '[data-button-easy]',
        normalButton: '[data-button-normal]',
        expertButton: '[data-button-expert]',
        customButton: '[data-button-custom]',
        modal: '[data-modal]',
        modalHeader: '[data-modal-header]',
        modalButton: '[data-modal-button]',

        optionsMenu: '[data-menu-options]',
        errorMenu: '[data-menu-error]',
        inputCols: '[data-input-cols]',
        inputRows: '[data-input-rows]',
        inputMines: '[data-input-mines]',
        formAdd: '[data-form-add]',
        formCancel: '[data-form-cancel]',
        formRevealMines: '[data-input-reveal-mines]',
    }

    getElement(selector) {
        return document.querySelector(selector);
    }
    
    getElements(selector) {
        return document.querySelectorAll(selector);
    }
}