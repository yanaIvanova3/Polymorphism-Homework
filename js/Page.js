/**
 * Created by Yana on 2/19/2016.
 */
function Page (heading, text) {
    var _heading = heading;
    var _text = text;

    this.getText = function () {
        return _heading + '/n' + _text;
    }

    this.setText = function (text) {
        _text = text;
    }

    this.addText = function (text) {
        _text += text;
    }
}