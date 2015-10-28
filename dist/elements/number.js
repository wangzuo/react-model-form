"use strict";

var InputNumber = require('react-input-number');

exports.form = function (attr, value, onChange) {
  return React.createElement(
    Field,
    { label: attr.slabel, horizontal: true },
    React.createElement(
      "span",
      { className: "input" },
      React.createElement("input", {
        type: "number",
        name: attr.name,
        value: value,
        onChange: onChange
      })
    )
  );
};

exports.view = function (attr, value) {
  return React.createElement(
    Field,
    { label: attr.slabel, horizontal: true },
    React.createElement(
      "span",
      { className: "input" },
      value
    )
  );
};