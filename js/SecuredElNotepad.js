/**
 * Created by Yana on 2/21/2016.
 */
var SecuredElNotepad = (function (parent) {
    function SecuredElNotepad(notepadPages, password, isTurnedOn) {
        parent.call(this, notepadPages, password, isTurnedOn);

    }

    SecuredElNotepad.prototype = Object.create(parent.prototype);
    SecuredElNotepad.prototype.constructor = SecuredElNotepad;

    SecuredElNotepad.prototype.start = function () {
        this.setStart(true);
    }

    SecuredElNotepad.prototype.stop = function () {
        this.setStart(false);
    }

    SecuredElNotepad.prototype.isStarted = function () {
        if (this.getStart()) {
            return true;
        } else {
            console.log('You should first turn the device on');
        }
    }

    SecuredElNotepad.prototype.addText = function(password, page, text) {
        if (this.isStarted()) {
            parent.prototype.addText.call(this, password, page, text);
        }
    }
    SecuredNotepad.prototype.deleteText = function (password, page) {
        if (this.isStarted()) {
            parent.prototype.deleteText.call(this,password, page);
        }
    }

    SecuredNotepad.prototype.replaceText = function (password, page, text) {
        if (this.isStarted()) {
            parent.prototype.replaceText.call(this, password, page, text)
        }
    }

    SecuredNotepad.prototype.viewPages = function (password) {
        if (this.isStarted()) {
            parent.prototype.viewPages.call(this, password);
        }
    }

    SecuredNotepad.prototype.searchInPages = function (password, word) {
        if (this.isStarted()) {
            parent.prototype.searchInPages.call(this, password, word);
        }
    }

    SecuredNotepad.prototype.printAllPagesWithDigits = function (password) {
        if (this.isStarted()) {
            parent.prototype.printAllPagesWithDigits.call(this, password);
        }
    }
    return SecuredElNotepad;
}(AbstractElNotepad));