var InputSlider = require('react-input-slider');
var Field = require('../field');

module.exports = function(attr, value, onChange) {
  function handleChange(pos) {
    onChange(pos.x);
  }

  return (
    <Field label={attr.label}>
      <InputSlider
        name={attr.name}
        x={value} 
        xmin={attr.min}
        xmax={attr.max}
        onChange={handleChange}
      />
    </Field>
  );
};
