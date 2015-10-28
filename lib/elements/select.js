var Select = require('react-select');
var Field = require('../field');

module.exports = function(attr, value, onChange) {
  var options = attr.options.map((option) => ({
    value: option[attr.select_value],
    label: option[attr.select_label]
  }));

  function handleChange(value) {
    onChange(value.split(','));
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
