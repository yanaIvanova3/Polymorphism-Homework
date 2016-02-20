/**
 * Created by Yana on 2/19/2016.
 */
function SecuredNotepad (notepadPages, password) {
    AbstractNotepad.call(this, notepadPages);

    var notepadPassword = password;
}

SecuredNotepad.prototype = Object.create(AbstractNotepad.prototype);
SecuredNotepad.prototype.constructor = SecuredNotepad;

SecuredNotepad.prototype.addPage = function(password, page) {
    if (password === this.notepadPassword) {
        this.notepadPages.push(page);
    }

    return "Wrong password!";
}

SecuredNotepad.prototype.deletePage = function (page) {
    if (password === this.notepadPassword) {
        var index = this.notepadPages.indexOf(page);
        this.notepadPages.splice(index, 1);
    }

    return "Wrong password!";
}

SecuredNotepad.prototype.addText = function(page, text) {
    if (password === this.notepadPassword) {
        page.addTextToPage(text);
    }

    return "Wrong password!";
}

SecuredNotepad.prototype.deleteText = function (page) {
    if (password === this.notepadPassword) {
        page.deleteTextFromPage();
    }

    return "Wrong password!";
}

SecuredNotepad.prototype.replaceText = function (page, text) {
    if (password === this.notepadPassword) {
        page.setText(text);
    }

    return "Wrong password!";
}

SecuredNotepad.prototype.viewPages = function (pages) {
    if (password === this.notepadPassword) {
        for (var i = 0; i < pages.length; i++) {
            pages[i].viewPageInfo();
        }
    }

    return "Wrong password!";
}