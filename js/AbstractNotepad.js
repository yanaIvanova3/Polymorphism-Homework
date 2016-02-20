/**
 * Created by Yana on 2/19/2016.
 */
function AbstractNotepad (pages) {
    var notepadPages = pages;

    this.getPages = function() {
        return notepadPages;
    }

    this.addText = function (page) {
        throw new Error('This is abstract class, addText-method should be implemented');
    }

    this.deleteText = function(page) {
        throw new Error('This is abstract class, deleteText-method should be implemented');
    }

    this.replaceText = function(page) {
        throw new Error('This is abstract class, replaceText-method should be implemented');
    }

    this.viewPages = function() {
        throw new Error('This is abstract class, viewPages-method should be implemented');
    }
}