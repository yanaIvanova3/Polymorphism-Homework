/**
 * Created by Yana on 2/19/2016.
 */

var SimpleNotepad = (function create(parent) {

    function SimpleNotepad(notepadPages) {
        parent.call(this, notepadPages);
    }

    SimpleNotepad.prototype = Object.create(parent.prototype);
    SimpleNotepad.prototype.constructor = SimpleNotepad;

    SimpleNotepad.prototype.addText = function (page, text) {
        var selectedPage = this.getPages().indexOf(page);
        this.getPages()[selectedPage].addTextToPage(text);
    }

    SimpleNotepad.prototype.deleteText = function (page) {
        var selectedPage = this.getPages().indexOf(page);
        this.getPages()[selectedPage].deleteTextFromPage();
    }

    SimpleNotepad.prototype.replaceText = function (page, text) {
        var selectedPage = this.getPages().indexOf(page);
        this.getPages()[selectedPage].setText(text);
    }

    SimpleNotepad.prototype.viewPages = function () {
        var pages = this.getPages();
        for (var i = 0; i < pages.length; i++) {
            console.log(pages[i].viewPageInfo());
        }
    }

    SimpleNotepad.prototype.searchInPages = function (word) {
        var pages = this.getPages();
        for (var i = 0; i < pages.length; i++) {
            pages[i].searchWord(word);
        }
    }

    SimpleNotepad.prototype.printAllPagesWithDigits = function () {
        var pages = this.getPages();
        for (var i = 0; i < pages.length; i++) {
            pages[i].hasDigits();
        }
    }
}(AbstractNotepad));