/**
 * Created by Yana on 2/18/2016.
 */
var SecuredNotepad = (function creation (parent) {

    function SecuredNotepad (notepadPages, password) {

        parent.call(this, notepadPages);

        var notepadPassword;

        this.getPassword = function() {
            return notepadPassword;
        }

        this.setPassword = function(password) {
            notepadPassword = password;
        }
    }

    SecuredNotepad.prototype = Object.create(parent.prototype);
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
            parent.prototype.deleteText.call(this, password, page);
        }
    }

    SecuredNotepad.prototype.replaceText = function (password, page, text) {
        if (this.matchPasswords(password)) {
            parent.prototype.replaceText.call(this, password, page, text)
        }
    }

    SecuredNotepad.prototype.viewPages = function (password) {
        if (this.matchPasswords(password)) {
            parent.prototype.viewPages.call(this, password);
        }
    }

    SecuredNotepad.prototype.searchInPages = function (password, word) {
        if (this.matchPasswords(password)) {
            parent.prototype.searchInPages.call(this, password, word);
        }
    }

    SecuredNotepad.prototype.printAllPagesWithDigits = function (password) {
        if (this.matchPasswords(password)) {
            parent.prototype.printAllPagesWithDigits.call(this, password);
        }
    }

    return SecuredNotepad;
}(SimpleNotepad));