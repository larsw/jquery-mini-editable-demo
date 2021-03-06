/*jslint browser: true*/
/*global $, jQuery*/
(function ($) {
  'use strict';

  var currentEditableContent = null;

  function EditableChangedEvent(target, oldValue, newValue) {
    this._target = target;
    this._oldValue = oldValue;
    this._newValue = newValue;
  }

  EditableChangedEvent.prototype.id = function () {
    return this._target.id;
  };

  EditableChangedEvent.prototype.newValue = function () {
    return this._newValue;
  };

  EditableChangedEvent.prototype.oldValue = function () {
    return this._oldValue;
  };

  EditableChangedEvent.prototype.target = function () {
    return this._target;
  };

  EditableChangedEvent.prototype.toString = function () {
    return this._target.id + " changed: " + this._oldValue + " -> " + this._newValue;
  };

  $.fn.enableEditable = function (changedCallback) {
    this.attr('contenteditable', 'true');
    this.on('focusin', function (event) {
      currentEditableContent = $(this).html();
    });
    this.on('focusout', function (event) {
      var oldContent = $(this).html();

      if (currentEditableContent !== oldContent) {
        var changedEvent = new EditableChangedEvent(event.target, currentEditableContent, oldContent);

        if (typeof changedCallback === "function") {
          changedCallback(changedEvent);
        }

        $(this).trigger('editableChanged', changedEvent);
      }
    });
  };

  $.fn.disableEditable = function () {
    this.removeAttr('contenteditable');
  };

}(jQuery));
