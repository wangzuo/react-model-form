var Textarea = require('react-textarea-autosize');
var Field = require('../field');

module.exports = function(attr, value, onChange) {
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
