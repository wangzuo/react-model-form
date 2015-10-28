var InputNumber = require('react-input-number');

exports.form = function(attr, value, onChange) {
  return (
    <Field label={attr.slabel} horizontal={true}>
      <span className="input">
        <input
          type="number"
          name={attr.name}
          value={value}
          onChange={onChange}
        />
      </span>
    </Field>
  );
};

exports.view = function(attr, value) {
  return (
    <Field label={attr.slabel} horizontal={true}>
      <span className="input">
        {value}
      </span>
    </Field>
  );
};
