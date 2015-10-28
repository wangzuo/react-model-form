var Field = require('../field');

exports.form = function(attr, value, onChange) {
  return (
    <Field label={attr.label}>
      <input
        type="text"
        value={value}
        name={attr.name}
        onChange={onChange}
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