'use strict';

var Select = require('react-select');
var Field = require('../field');

exports.form = function (attr, value, onChange) {
  var options = attr.options.map(function (option) {
    return {
      value: option.id,
      label: option.name
    };
  });

  function handleChange(value) {
    onChange(value.split(','));
  }

  return React.createElement(
    Field,
    { label: attr.label },
    React.createElement(Select, {
      name: attr.name,
      value: value,
      options: options,
      multi: attr.multiple,
      onChange: handleChange
    })
  );
};

exports.view = function (attr, value) {
  return React.createElement(
    Field,
    { label: attr.label },
    value
  );
};