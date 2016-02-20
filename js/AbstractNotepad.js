/**
 * Created by Yana on 2/19/2016.
 */
function AbstractNotepad (notepadPages) {
    var _notepadPages = notepadPages;

    this.getPages = function () {
        return _notepadPages;
    }
}
AbstractNotepad.prototype.addText = function () {
    throw new Error('This is abstract class, addText-method should be implemented');
}

AbstractNotepad.prototype.deleteText = function() {
    throw new Error('This is abstract class, deleteText-method should be implemented');
}

AbstractNotepad.prototype.replaceText = function() {
    throw new Error('This is abstract class, replaceText-method should be implemented');
}

AbstractNotepad.prototype.viewPages = function() {
    throw new Error('This is abstract class, viewPages-method should be implemented');
}

AbstractNotepad.prototype.searchInPages = function () {
    throw new Error('This is abstract class, search-method should be implemented');
}

AbstractNotepad.prototype.printAllPagesWithDigits = function () {
    throw new Error('This is abstract class, printDigits-method should be implemented');
}