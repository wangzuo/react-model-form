'use strict';

var React = require('react');
var Field = require('../field');

module.exports = function (attr, value, onChange) {
  function handleChange(e) {
    onChange(e.target.value);
  }

  // todo: input=type support
  return React.createElement(
    Field,
    { label: attr.label },
    React.createElement('input', {
      type: 'text',
      value: value,
      name: attr.name,
      onChange: handleChange
    })
  );
};