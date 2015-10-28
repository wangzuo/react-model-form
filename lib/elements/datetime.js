var Field = require('../field');

module.exports = function(attr, value, onChange) {
  function handleChange(e) {
    onChange(e.target.value);
  }

  return (
    <Field label={attr.label}>
      <input
        type="date"
        name={attr.name}
        value={value}
        onChange={handleChange}
      />
    </Field>
  );
};
