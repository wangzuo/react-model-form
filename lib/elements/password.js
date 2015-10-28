var Field = require('../field');

exports.form = function(attr, value, onChange) {
  function handleChange(e) {
    onChange(e.target.value);
  }

  return (
    <Field label={attr.label}>
      <input
        name={attr.name}
        autoComplete="new-password"
        type="password"
        value={value}
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