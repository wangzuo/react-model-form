var Field = require('../field');

exports.form = function(attr, value, onChange) {
  return (
    <Field label={attr.label}>
      <input
        name={attr.name}
        autoComplete="new-password"
        type="password"
        value={value}
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