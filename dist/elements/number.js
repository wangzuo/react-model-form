'use strict';

var React = require('react');
var InputNumber = require('react-input-number');

module.exports = function (attr, value, onChange) {
  return React.createElement(
    Field,
    { label: attr.slabel, horizontal: true },
    React.createElement(
      'span',
      { className: 'input' },
      React.createElement('input', {
        type: 'number',
        name: attr.name,
        value: value,
        onChange: onChange
      })
    )
  );
};