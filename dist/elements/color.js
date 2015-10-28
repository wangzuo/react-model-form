'use strict';

var InputColor = require('react-input-color');
var Field = require('../field');

exports.form = function (attr, value, onChange) {
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

exports.view = function (attr, value) {
  return React.createElement(
    Field,
    { label: attr.label, horizontal: true },
    React.createElement(
      'span',
      { className: 'input' },
      value
    )
  );
};