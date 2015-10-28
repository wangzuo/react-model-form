var cx = require('classnames');
var blacklist = require('blacklist');
var React = require('react');

module.exports = React.createClass({
  displayName: 'ModelFormField',

  getDefaultProps() {
    return {
      label: '',
      horizontal: false
    }
  },

  renderError() {
    if(!this.props.error) return null;
    return <span className="error">{this.props.error}</span>;
  },

  renderLabel() {
    if(!this.props.label) return null;
    return <label className="label">{this.props.label}</label>
  },

  render() {
    var horizontal = this.props.horizontal;
    var props = blacklist(this.props, 'horizontal', 'label', 'className', 'children');
    props.className = cx('u-field', {
      'u-field-x' : horizontal,
      'u-field-err': this.props.error,
    }, this.props.className);

    return (
      <div {... props}>
        {this.renderLabel()}
        {this.props.children}
        {this.renderError()}
      </div>
    );
  }
});

