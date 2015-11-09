'use strict';

var blacklist = require('blacklist');
var React = require('react');

module.exports = function (elements) {

  var Element = function Element(props) {
    var attr = props.attr;
    var value = props.value;
    var onChange = props.onChange;

    var type = attr.type;
    var name = attr.name;
    var label = attr.label;
    var handleChange = function handleChange(value) {
      onChange(name, value);
    };

    if (!elements[type]) throw new Error('type ' + type + ' element not defined');
    return elements[type](attr, value, handleChange);
  };

  return React.createClass({
    displayName: 'ModelForm',

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

      return React.createElement(Element, {
        key: i,
        attr: attr,
        value: values[attr.name],
        onChange: this.props.onChange
      });
    },
    render: function render() {
      var model = this.props.model;
      var attrs = model.attrs;
      var props = blacklist(this.props, 'onChange', 'children');

      return React.createElement(
        'form',
        props,
        attrs.map(this.renderAttr),
        this.props.children
      );
    }
  });
};