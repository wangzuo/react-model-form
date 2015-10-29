'use strict';

var React = require('react');
var InputColor = require('react-input-color');
var Field = require('../field');

module.exports = function (attr, value, onChange) {
  return React.createElement(
    Field,
    { label: attr.label, horizontal: true },
    React.createElement(
      'span',
      { className: 'input' },
      React.createElement(InputColor, {
        value: value || '#ffffff',
        onChange: onChange
      })
    )
  );
};