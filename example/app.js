var React = require('react');
var ReactDOM = require('react-dom');
var Form = require('../lib/form');

var App = React.createClass({
  displayName: 'App',

  render() {
    return <Form/>
  }
});

ReactDOM.render(<App/>, document.getElementById('app'));
