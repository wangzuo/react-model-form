'use strict';

var React = require('react');
var Field = require('../field');

module.exports = function (attr, value, onChange) {
  function handleChange(e) {
    onChange(e.target.value);
  }

  return React.createElement(
    Field,
    { label: attr.label },
    React.createElement('input', {
      type: 'date',
      name: attr.name,
      value: value,
      onChange: handleChange
    })
  );
};