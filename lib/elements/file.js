var Field = require('../field');

exports.form = function(attr, value, onChange) {
  return (
    <Field label={attr.label}>
      <input
        type="file"
        name={attr.name}
        multiple={attr.multiple}
        onChange={onChange}
      />
    </Field>
  );
};