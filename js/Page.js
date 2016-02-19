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
    this._text += text;
}

Page.prototype.deleteTextFromPage = function() {
    this._text = '';
}

Page.prototype.viewPageInfo = function() {
    return this._heading + '/n' + this._text;
}