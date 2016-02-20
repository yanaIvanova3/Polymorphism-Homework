/**
 * Created by Yana on 2/19/2016.
 */
function Page (heading, text) {
    var _heading = heading;
    var _text = text;

    this.getText = function () {
        return _text;
    }

    this.setText = function (text) {
        _text = text;
    }

    this.getHeading = function() {
        return _heading;
    }

    this.setHeading = function (heading) {
        _heading = heading;
    }
}

Page.prototype.addTextToPage = function (text) {
    var currentText = this.getText();
    this.setText(currentText += text);
}

Page.prototype.deleteTextFromPage = function() {
    this.setText('');
}

Page.prototype.viewPageInfo = function() {
    return this.getHeading() + '\n' + this.getText();
}