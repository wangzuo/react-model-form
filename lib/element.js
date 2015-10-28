var React = require('react');
var Select = require('react-select');
var Elements = require('./elements');

// todo: avoid e.target.value
// var InputText = require('./input-text');

var Field = require('./field');

function renderElement(attr, value, onChange) {
  var type = attr.type;
  var name = attr.name;
  var label = attr.label;

  var handleChange = function(e) {
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

  if(Elements[type]) return Elements[type].form(attr, value, handleChange);
  else throw new Error(`${type} element not defined`);

  switch(type) {
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
            value={value}
            options={options}
            multi={attr.multiple}
            onChange={handleChange}
          />
        </Field>
      );

    // case 'email':
    //   return (
    //     <Field label={label}>
    //       <input
    //         type="email"
    //         value={value}
    //         name={name}
    //         onChange={handleChange}
    //       />
    //     </Field>
    //   );
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
