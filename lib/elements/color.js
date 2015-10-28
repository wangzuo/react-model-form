var InputColor = require('react-input-color');
var Field = require('../field');

module.exports = function(attr, value, onChange) {
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
