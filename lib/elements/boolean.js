var InputSwitch = require('react-input-switch');
var Field = require('../field');

exports.form = function(attr, value, onChange) {
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

exports.view = function() {
  return (
    <Field label={attr.label} horizontal={true}>
      <div className="input">
        <InputSwitch
          checked={!!value}
          onChange={onChange}
        />
      </div>
    </Field>
  )
};