var Textarea = require('react-textarea-autosize');
var Field = require('../field');

exports.form = function(attr, value, onChange) {
  function handleChange(e) {
    onChange(e.target.value);
  }

  return (
    <Field label={attr.label}>
      <Textarea
        rows={attr.rows || 4}
        name={attr.name}
        value={value}
        onChange={handleChange}
      />
    </Field>
  );
};

exports.view = function(attr, value) {
  <Field label={attr.label}>
    {value}
  </Field>
};
