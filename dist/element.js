'use strict';

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

  var handleChange = function handleChange(e) {
    // console.log('handleChange', name, e, e.target.value);
    if (e.target) return onChange(name, e.target.value);
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

  switch (type) {
    case 'integer':
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
    case 'string':
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

    case 'media':
    case 'file':
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
    case 'color':
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
    case 'text':
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
    case 'boolean':
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
    case 'enum':
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
    case 'array':
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

    case 'model':
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

    case 'range':
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

    case 'email':
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
    case 'password':
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

module.exports = React.createClass({
  displayName: 'ModelFormElement',

  render: function render() {
    var attr = this.props.attr;
    var value = this.props.value;
    return renderElement(attr, value, this.props.onChange);
  }
});