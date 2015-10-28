var React = require('react');
var Field = require('../field');

module.exports = function(attr, value, onChange) {
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
