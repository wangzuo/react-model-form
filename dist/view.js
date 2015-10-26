'use strict';

var React = require('react');
var Field = require('./field');

function renderElement(attr, value, onChange) {
  var type = attr.type;
  var name = attr.name;
  var label = attr.label;

  var handleChange = function handleChange(e) {
    if (e.target) return onChange(name, e.target.value);
    console.log('handleChange', name, e);
    onChange(name, e);
  };

  // fix react-select options
  if (attr.options) {
    var options = attr.options.map(function (option) {
      return {
        value: option.id,
        label: option.name
      };
    });
  }

  if (type === 'Boolean' || type === 'Color') {
    handleChange = function (value) {
      onChange(name, value);
    };
  }

  switch (type) {
    case 'Integer':
      return React.createElement(
        Field,
        { label: label, horizontal: true },
        React.createElement(
          'span',
          { className: 'input' },
          React.createElement('input', {
            type: 'number',
            name: name,
            value: parseInt(value, 10),
            onChange: handleChange
          })
        )
      );
    case 'String':
      return React.createElement(
        Field,
        { label: label },
        React.createElement('input', {
          type: 'text',
          value: value,
          name: name,
          onChange: handleChange
        })
      );

    case 'Media':
    case 'File':
      return React.createElement(
        Field,
        { label: label },
        React.createElement('input', {
          type: 'file',
          value: value,
          name: name,
          onChange: handleChange,
          multiple: attr.multiple
        })
      );
    case 'Color':
      return React.createElement(
        Field,
        { label: label, horizontal: true },
        React.createElement(
          'span',
          { className: 'input' },
          React.createElement(InputColor, {
            value: value || '#ffffff',
            onChange: handleChange
          })
        )
      );
    case 'Text':
      return React.createElement(
        Field,
        { label: label },
        React.createElement(Textarea, {
          rows: 4,
          name: name,
          value: value,
          onChange: handleChange
        })
      );
    case 'Boolean':
      return React.createElement(
        Field,
        { label: label, horizontal: true },
        React.createElement(
          'div',
          { className: 'input' },
          React.createElement(Switch, {
            checked: !!value,
            onChange: handleChange
          })
        )
      );
    case 'Enum':
      return React.createElement(
        Field,
        { label: label },
        React.createElement(Select, {
          name: name,
          options: attr.options,
          value: value,
          onChange: handleChange
        })
      );
    case 'Array':
      return React.createElement(
        Field,
        { label: label },
        React.createElement(Select, {
          name: name,
          options: attr.options,
          value: value,
          multi: true,
          onChange: handleChange
        })
      );

    case 'Model':
      return React.createElement(
        Field,
        { label: label },
        React.createElement(Select, {
          name: name,
          options: options,
          multi: attr.multiple,
          onChange: handleChange
        })
      );

    case 'Range':
      return React.createElement(
        Field,
        { label: label },
        React.createElement(InputSlider, {
          name: name,
          x: value,
          xmin: attr.min,
          xmax: attr.max
        })
      );

    case 'Email':
      return React.createElement(
        Field,
        { label: label },
        React.createElement('input', {
          type: 'email',
          value: value,
          name: name,
          onChange: handleChange
        })
      );
    case 'Password':
      return React.createElement(
        Field,
        { label: label },
        React.createElement('input', {
          autoComplete: 'new-password',
          type: 'password',
          value: value,
          name: name,
          onChange: handleChange
        })
      );
  }
}

var Element = React.createClass({
  displayName: 'ModelFormViewElement',

  render: function render() {
    var attr = this.props.attr;
    var value = this.props.value;
    return renderElement(attr, value, this.handleChange);
  },

  handleChange: function handleChange(name, value) {
    if (this.props.onChange) this.props.onChange(name, value);
  }
});

module.exports = React.createClass({
  displayName: 'ModelFormView',

  getDefaultProps: function getDefaultProps() {
    return {
      model: {
        attrs: [],
        values: {}
      }
    };
  },

  renderAttr: function renderAttr(attr, i) {
    var model = this.props.model;
    var values = model.values || {};

    if (attr.name === model.user) return null;

    return React.createElement(Element, {
      key: i,
      attr: attr,
      value: values[attr.name],
      onChange: this.handleChange
    });
  },

  render: function render() {
    var model = this.props.model;
    var attrs = model.attrs;

    return React.createElement(
      'div',
      this.props,
      attrs.map(this.renderAttr),
      React.createElement('input', { name: '_model', type: 'hidden', value: model.table }),
      this.props.children
    );
  }
});