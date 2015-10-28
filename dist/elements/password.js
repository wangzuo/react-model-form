"use strict";

var Field = require('../field');

exports.form = function (attr, value, onChange) {
  function handleChange(e) {
    onChange(e.target.value);
  }

  return React.createElement(
    Field,
    { label: attr.label },
    React.createElement("input", {
      name: attr.name,
      autoComplete: "new-password",
      type: "password",
      value: value,
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