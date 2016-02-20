/**
 * Created by Yana on 2/19/2016.
 */
function SecuredNotepad (notepadPages, password) {
    AbstractNotepad.call(this, notepadPages);

    var notepadPassword = password;

    this.getPassword = function() {
        return notepadPassword;
    }
}

SecuredNotepad.prototype = Object.create(AbstractNotepad.prototype);
SecuredNotepad.prototype.constructor = SecuredNotepad;

SecuredNotepad.prototype.addText = function(password, page, text) {
    if (password == this.getPassword()) {
        var selectedPage = this.getPages().indexOf(page);
        this.getPages()[selectedPage].addTextToPage(text);
    } else {
        return "Wrong password!";
    }
}
SecuredNotepad.prototype.deleteText = function (password, page) {
    if (password == this.getPassword()) {
        var selectedPage = this.getPages().indexOf(page);
        this.getPages()[selectedPage].deleteTextFromPage();
    }else {
        return "Wrong password!";
    }
}

SecuredNotepad.prototype.replaceText = function (password, page, text) {
    if (password == this.getPassword()) {
        var selectedPage = this.getPages().indexOf(page);
        this.getPages()[selectedPage].setText(text);
    } else {
        return "Wrong password!";
    }
}

SecuredNotepad.prototype.viewPages = function (password) {
    if (password == this.getPassword()) {
        var pages = this.getPages();
        for (var i = 0; i < pages.length; i++) {
            console.log(pages[i].viewPageInfo());
        };
    } else {
        return "Wrong password!";
    }
}