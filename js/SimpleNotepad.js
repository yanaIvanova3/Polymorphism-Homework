/**
 * Created by Yana on 2/19/2016.
 */
function SimpleNotepad (pages) {
    AbstractNotepad.call(this, notepadPages);
}

SimpleNotepad.prototype = Object.create(AbstractNotepad.prototype);
SimpleNotepad.prototype.constructor = SimpleNotepad;

SimpleNotepad.prototype.addPage = function(page) {
    this.pages.push(page);
}

SimpleNotepad.prototype.deletePage = function (page) {
    var index = this.pages.indexOf(page);
    this.pages.splice(index, 1);
}

SimpleNotepad.prototype.addText = function(page, text) {
    page.addTextToPage(text);
}

SimpleNotepad.prototype.deleteText = function (page) {
    page.deleteTextFromPage();
}

SimpleNotepad.prototype.replaceText = function (page, text) {
    page.setText(text);
}

SimpleNotepad.prototype.viewPages = function (pages) {
    for (var i = 0; i < pages.length; i++) {
        pages[i].viewPageInfo();
    }
}