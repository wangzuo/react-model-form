'use strict';

var blacklist = require('blacklist');
var React = require('react');
var Element = require('./element');

module.exports = React.createClass({
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

    if (attr.name === model.user) return null;

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
      React.createElement('input', { name: '_model', type: 'hidden', value: model.table }),
      this.props.children
    );
  }
});