var Textarea = require('react-textarea-autosize');
var Field = require('../field');

exports.form = function(attr, value, onChange) {
  return (
    <Field label={attr.label}>
      <Textarea
        rows={4}
        name={attr.name}
        value={value}
        onChange={onChange}
      />
    </Field>
  );
};

exports.view = function(attr, value) {
  <Field label={attr.label}>
    {value}
  </Field>
};
