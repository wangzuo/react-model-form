'use strict';

var cx = require('classnames');
var React = require('react');

module.exports = React.createClass({
  displayName: 'Field',

  getDefaultProps: function getDefaultProps() {
    return {
      label: '',
      horizontal: false
    };
  },

  renderError: function renderError() {
    if (!this.props.error) return null;

    return React.createElement(
      'span',
      { className: 'error' },
      this.props.error
    );
  },

  renderLabel: function renderLabel() {
    if (!this.props.label) return null;

    return React.createElement(
      'label',
      { className: 'label' },
      this.props.label
    );
  },

  render: function render() {
    var horizontal = this.props.horizontal;
    var cn = cx('u-field', {
      'u-field-x': horizontal,
      'u-field-err': this.props.error
    });

    return React.createElement(
      'div',
      { className: cn },
      this.renderLabel(),
      this.props.children,
      this.renderError()
    );
  }
});