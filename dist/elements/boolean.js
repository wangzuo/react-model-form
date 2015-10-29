'use strict';

var React = require('react');
var InputSwitch = require('react-input-switch');
var Field = require('../field');

module.exports = function (attr, value, onChange) {
  return React.createElement(
    Field,
    { label: attr.label, horizontal: true },
    React.createElement(
      'div',
      { className: 'input' },
      React.createElement(InputSwitch, {
        checked: !!value,
        onChange: onChange
      })
    )
  );
};