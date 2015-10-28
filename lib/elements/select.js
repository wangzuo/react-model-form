var Select = require('react-select');
var Field = require('../field');

exports.form = function(attr, value, onChange) {
  var options = attr.options.map((option) => ({
    value: option.id,
    label: option.name
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

exports.view = function(attr, value) {
  return (
    <Field label={attr.label}>
    {value}
    </Field>
  );
};
