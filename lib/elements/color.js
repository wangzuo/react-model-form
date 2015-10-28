var InputColor = require('react-input-color');
var Field = require('../field');

exports.form = function(attr, value, onChange) {
  return (
    <Field label={attr.label} horizontal>
      <span className="input">
        <InputColor
          value={value||'#ffffff'}
          onChange={onChange}
        />
      </span>
    </Field>
  );
};

exports.view = function(attr, value) {
  return (
    <Field label={attr.label} horizontal>
      <span className="input">
        {value}
      </span>
    </Field>
  );
};