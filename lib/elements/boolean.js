var InputSwitch = require('react-input-switch');
var Field = require('../field');

module.exports = function(attr, value, onChange) {
  return (
    <Field label={attr.label} horizontal={true}>
      <div className="input">
        <InputSwitch
          checked={!!value}
          onChange={onChange}
        />
      </div>
    </Field>
  );
};
