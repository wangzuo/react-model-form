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

    if(Elements[type]) return Elements[type].form(attr, value, handleChange);
    else throw new Error(`${type} element not defined`);
  },

  render() {
    var attr = this.props.attr;
    var value = this.props.value;
    return this.renderElement(attr, value);
  }
});
