'use strict';

var React = require('react');
var Select = require('react-select');
var Field = require('../field');

module.exports = function (attr, value, onChange) {
  var options = attr.options.map(function (option) {
    return {
      value: option[attr.select_value || 'id'],
      label: option[attr.select_label || 'name']
    };
  });

  function handleChange(value) {
    if (attr.multiple) {
      onChange(value.map(function (obj) {
        return obj.value;
      }));
    } else {
      onChange(value.value);
    }
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