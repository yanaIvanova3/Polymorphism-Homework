/**
 * Created by Yana on 2/19/2016.
 */


function AbstractElNotepad (notepadPages, password, isTurnedOn) {
    parent.call(this, notepadPages, password);

    var _isTurnedOn = isTurnedOn;

    this.setStart = function (boolean) {
        _isTurnedOn = boolean;
    }

    this.getStart = function() {
        return _isTurnedOn;
    }
}

    AbstractElNotepad.prototype = Object.create(parent.prototype);
    AbstractElNotepad.prototype.constructor = AbstractElNotepad;

    AbstractElNotepad.prototype.start = function() {
        throw new Error ('Implement the start-method');
    }

    AbstractElNotepad.prototype.stop = function() {
        throw new Error ('Implement the stop-method');
    }

    AbstractElNotepad.prototype.isStarted = function() {
        throw new Error ('Implement the isStarted-method');
    }