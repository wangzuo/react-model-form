var React = require('react');
var Select = require('react-select');
var Field = require('../field');

module.exports = function(attr, value, onChange) {
  var options = attr.options.map((option) => ({
    value: option[attr.select_value || 'id'],
    label: option[attr.select_label || 'name']
  }));

  function handleChange(value) {
    if(attr.multiple) {
      onChange((value || []).map((obj) => obj.value));
    } else {
      onChange(
        value === null ? null : value.value
      );
    }
  }

  return (
    <Field label={attr.label}>
      <Select
        name={attr.name}
        value={value}
        options={options}
        multi={attr.multiple}
        onChange={handleChange}
      />
    </Field>
  );
};
