var React = require('react');
var Elements = require('./elements');

module.exports = React.createClass({
  displayName: 'ModelFormElement',

  renderElement(attr, value) {
    var type = attr.type;
    var name = attr.name;
    var label = attr.label;
    var onChange = this.props.onChange;
    var handleChange = function(value) {
      onChange(name, value);
    };

    if(!Elements[type]) throw new Error(`type ${type} element not defined`);
    return Elements[type](attr, value, handleChange);
  },

  render() {
    var attr = this.props.attr;
    var value = this.props.value;
    return this.renderElement(attr, value);
  }
});
