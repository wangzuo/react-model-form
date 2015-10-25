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
    if(e.target) return onChange(name, e.target.value);
    console.log('handleChange', name, e);
    onChange(name, e);
  };

  // fix react-select options
  if(attr.options) {
    var options = attr.options.map((option) => ({
      value: option.id,
      label: option.name
    }));
  }


  // if(attr.options) {
  //   attr.options = attr.options.map((option) => ({
  //     value: option,
  //     label: option
  //   }));

  //   if(type === 'Array') {
  //     handleChange = function(value, selected) {
  //       onChange(name, selected.map((s) => s.value));
  //     };
  //   } else if(type === 'Enum') {
  //     handleChange = function(value, selected) {
  //       onChange(name, value);
  //     };
  //   }
  // }

  if(type === 'Boolean' || type === 'Color') {
    handleChange = function(value) {
      onChange(name, value);
    };
  }

  switch(type) {
    case 'Integer':
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
    case 'String':
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

    case 'Media':
    case 'File':
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
    case 'Color':
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
    case 'Text':
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
    case 'Boolean':
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
    case 'Enum':
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
    case 'Array':
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

    case 'Model':
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

    case 'Range':
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

    case 'Email':
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
    case 'Password':
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
    return renderElement(attr, value, this.handleChange);
  },

  handleChange(name, value) {
    if(this.props.onChange) this.props.onChange(name, value);
  }
});
