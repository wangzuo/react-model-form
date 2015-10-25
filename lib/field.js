var cx = require('classnames');
var React = require('react');

module.exports = React.createClass({
  displayName: 'Field',

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

    return (
      <label className="label">{this.props.label}</label>
    );
  },

  render() {
    var horizontal = this.props.horizontal;
    var cn = cx('u-field', {
      'u-field-x' : horizontal,
      'u-field-err': this.props.error
    });

    return (
      <div className={cn}>
        {this.renderLabel()}
        {this.props.children}
        {this.renderError()}
      </div>
    );
  }
});

