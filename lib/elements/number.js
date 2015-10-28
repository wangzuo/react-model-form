var InputNumber = require('react-input-number');

module.exports = function(attr, value, onChange) {
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
