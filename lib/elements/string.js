var Field = require('../field');

exports.form = function(attr, value, onChange) {
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

exports.view = function(attr, value) {
  return (
    <Field label={attr.label}>
      {value}
    </Field>
  );
};
