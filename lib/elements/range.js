var InputSlider = require('react-input-slider');
var Field = require('../field');

exports.form = function(attr, value, onChange) {
  // todo: fix
  // function handleChange(pos) {
  //   console.log(attr.name, pos.x);
  //   onChange(attr.name, pos.x);
  // }

  return (
    <Field label={attr.label}>
      <InputSlider
        name={attr.name}
        x={value && value.x}
        xmin={attr.min}
        xmax={attr.max}
        onChange={onChange}
      />
    </Field>
  );
};

exports.view = function(attr, value) {
return (
    <Field label={attr.label}>
      {value}
    </Field>
  );
};
