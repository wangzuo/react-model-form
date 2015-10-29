'use strict';

var React = require('react');
var Field = require('../field');

module.exports = function (attr, value, onChange) {
  return React.createElement(
    Field,
    { label: attr.label },
    React.createElement('input', {
      type: 'file',
      name: attr.name,
      multiple: attr.multiple,
      onChange: onChange
    })
  );
};