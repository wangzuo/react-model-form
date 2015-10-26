var React = require('react');
var Select = require('react-select');
var Switch = require('react-input-switch');
var Textarea = require('react-textarea-autosize');
var InputColor = require('react-input-color');
// var InputNumber = require('react-input-number');
var InputSlider = require('react-input-slider');

// todo: avoid e.target.value
// var InputText = require('./input-text');

var Field = require('./field');

function renderElement(attr, value, onChange) {
  var type = attr.type;
  var name = attr.name;
  var label = attr.label;

  var handleChange = function(e) {
    // console.log('handleChange', name, e, e.target.value);
    if(e.target) return onChange(name, e.target.value);
    onChange(name, e);
  };

  // fix react-select options
  if(attr.options) {
    var options = attr.options.map((option) => ({
      value: option.id,
      label: option.name
    }));
  }
  
  switch(type) {
    case 'integer':
      return (
        <Field label={label} horizontal={true}>
          <span className="input">
            <input
              type="number"
              name={name}
              value={parseInt(value, 10)}
              onChange={handleChange}
            />
          </span>
        </Field>
      );
    case 'string':
      return (
        <Field label={label}>
          <input
            type="text"
            value={value}
            name={name}
            onChange={handleChange}
          />
        </Field>
      );

    case 'media':
    case 'file':
      return (
        <Field label={label}>
          <input
            type="file"
            value={value}
            name={name}
            onChange={handleChange}
            multiple={attr.multiple}
          />
        </Field>
      );
    case 'color':
      return (
        <Field label={label} horizontal>
          <span className="input">
            <InputColor
              value={value||'#ffffff'}
              onChange={handleChange}
            />
          </span>
        </Field>
      );
    case 'text':
      return (
        <Field label={label}>
          <Textarea
            rows={4}
            name={name}
            value={value}
            onChange={handleChange}
          />
        </Field>
      );
    case 'boolean':
      return (
        <Field label={label} horizontal={true}>
          <div className="input">
            <Switch
              checked={!!value}
              onChange={handleChange}
            />
          </div>
        </Field>
      );
    case 'enum':
      return (
        <Field label={label}>
          <Select
            name={name}
            options={attr.options}
            value={value}
            onChange={handleChange}
          />
        </Field>
      );
    case 'array':
      return (
        <Field label={label}>
          <Select
            name={name}
            options={attr.options}
            value={value}
            multi={true}
            onChange={handleChange}
          />
        </Field>
      );

    case 'model':
      return (
        <Field label={label}>
          <Select
            name={name}
            options={options}
            multi={attr.multiple}
            onChange={handleChange}
          />
        </Field>
      );

    case 'range':
      return (
        <Field label={label}>
          <InputSlider
            name={name}
            x={value}
            xmin={attr.min}
            xmax={attr.max}
          />
        </Field>
      );

    case 'email':
      return (
        <Field label={label}>
          <input
            type="email"
            value={value}
            name={name}
            onChange={handleChange}
          />
        </Field>
      );
    case 'password':
      return (
        <Field label={label}>
          <input
            autoComplete="new-password"
            type="password"
            value={value}
            name={name}
            onChange={handleChange}
          />
        </Field>
      );
  }
}

module.exports = React.createClass({
  displayName: 'ModelFormElement',

  render() {
    var attr = this.props.attr;
    var value = this.props.value;
    return renderElement(attr, value, this.props.onChange);
  }
});
