"use strict";

var Field = require('../field');

exports.form = function (attr, value, onChange) {
  function handleChange(e) {
    onChange(e.target.value);
  }

  // todo: input=type support
  return React.createElement(
    Field,
    { label: attr.label },
    React.createElement("input", {
      type: "text",
      value: value,
      name: attr.name,
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