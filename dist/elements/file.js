"use strict";

var Field = require('../field');

exports.form = function (attr, value, onChange) {
  return React.createElement(
    Field,
    { label: attr.label },
    React.createElement("input", {
      type: "file",
      name: attr.name,
      multiple: attr.multiple,
      onChange: onChange
    })
  );
};