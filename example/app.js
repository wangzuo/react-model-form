require('../lib/form.less');
require('./app.less');

var React = require('react');
var ReactDOM = require('react-dom');
var Form = require('../lib/form');

var App = React.createClass({
  displayName: 'App',

  getInitialState() {
    return {
      model: {
        attrs: [
          {name: 'title', type: 'string', label: 'Title'}
        ],
        values: {
          title: 'Sit Tristique Mollis'
        }
      }
    };
  },

  render() {
    return (
      <div className="app">
        <h1>react-model-form</h1>
        <Form
          model={this.state.model}
          onChange={this.handleChange}
        />
        <pre>
          {JSON.stringify(this.state.model, null, '  ')} 
        </pre>
      </div>
    );
  },

  handleChange(name, value) {
    console.log(name, 'name', 'value', value);
    var model = this.state.model;
    model.values[name] = value;

    this.setState({model: model});
  }
});

ReactDOM.render(<App/>, document.getElementById('app'));
