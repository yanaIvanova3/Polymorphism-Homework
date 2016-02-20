/**
 * Created by Yana on 2/19/2016.
 */
var securedNotepad = (function creation (parent) {

    function SecuredNotepad (notepadPages, password) {

        SimpleNotepad.call(this, notepadPages);

        var notepadPassword = password;

        this.getPassword = function() {
            return notepadPassword;
        }
    }

    SecuredNotepad.prototype = Object.create(SimpleNotepad.prototype);
    SecuredNotepad.prototype.constructor = SecuredNotepad;

    SecuredNotepad.prototype.matchPasswords = function (password) {
        if (this.getPassword() === password) {
            return true;
        } else {
            console.log('Wrong password!');
        }
    }

    SecuredNotepad.prototype.addText = function(password, page, text) {
        if (this.matchPasswords(password)) {
            var selectedPage = this.getPages().indexOf(page);
            this.getPages()[selectedPage].addTextToPage(text);
        }
    }
    SecuredNotepad.prototype.deleteText = function (password, page) {
        if (this.matchPasswords(password)) {
            SimpleNotepad.prototype.deleteText.call(this, password, page);
        }
    }

    SecuredNotepad.prototype.replaceText = function (password, page, text) {
        if (this.matchPasswords(password)) {
            SimpleNotepad.prototype.replaceText.call(this, password, page, text)
        }
    }

    SecuredNotepad.prototype.viewPages = function (password) {
        if (this.matchPasswords(password)) {
            SimpleNotepad.prototype.viewPages.call(this, password);
        }
    }

    SecuredNotepad.prototype.searchInPages = function (password, word) {
        if (this.matchPasswords(password)) {
            SimpleNotepad.prototype.searchInPages.call(this, password, word);
        }
    }

    SecuredNotepad.prototype.printAllPagesWithDigits = function (password) {
        if (this.matchPasswords(password)) {
            SimpleNotepad.prototype.printAllPagesWithDigits.call(this, password);
        }
    }

    return SecuredNotepad;
}(SimpleNotepad));