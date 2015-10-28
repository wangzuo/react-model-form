'use strict';

var InputSwitch = require('react-input-switch');
var Field = require('../field');

exports.form = function (attr, value, onChange) {
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

exports.view = function () {
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