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

  EditableChangedEvent.prototype.toString = function () {
    return this._target.id + " changed: " + this._oldValue + " -> " + this._newValue;
  }

  $.fn.makeEditable = function (changedCallback) {
    this.attr('contenteditable', 'true');
    this.on('focusin', function (event) {
      currentEditableContent = $(this).html();
    });
    this.on('focusout', function (event) {
      var oldContent = $(this).html();

      if (currentEditableContent != oldContent) {
        var changedEvent = new EditableChangedEvent(event.target, currentEditableContent, oldContent);

        if (typeof(changedCallback) == "function") {
          changedCallback(changedEvent);
        }
        $(this).trigger('editableChanged', changedEvent);
      }
    });
  };
})(jQuery);
