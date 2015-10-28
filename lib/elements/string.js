var Field = require('../field');

module.exports = function(attr, value, onChange) {
  function handleChange(e) {
    onChange(e.target.value);
  }

  // todo: input=type support
  return (
    <Field label={attr.label}>
      <input
        type="text"
        value={value}
        name={attr.name}
        onChange={handleChange}
      />
    </Field>
  );
};
