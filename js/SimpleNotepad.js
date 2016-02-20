/**
 * Created by Yana on 2/19/2016.
 */
function SimpleNotepad (notepadPages) {
    AbstractNotepad.call(this, notepadPages);
}

SimpleNotepad.prototype = Object.create(AbstractNotepad.prototype);
SimpleNotepad.prototype.constructor = SimpleNotepad;

SimpleNotepad.prototype.addText = function(page, text) {
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