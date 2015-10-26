require('../lib/form.less');
require('../lib/input-switch.less');
require('./app.less');

var React = require('react');
var ReactDOM = require('react-dom');
var Form = require('../lib/form');
var packageInfo = require('../package.json');

var App = React.createClass({
  displayName: 'App',

  getInitialState() {
    return {
      model: {
        attrs: [
          {name: 'published', type: 'boolean', label: 'Published'},
          {name: 'cover', type: 'file', label: 'Cover image'},
          {name: 'title', type: 'string', label: 'Title'},
          {name: 'content', type: 'text', label: 'content'}
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
        <h1>{packageInfo.name}</h1>
        <h2>{packageInfo.description}</h2>
        <Form
          method="post"
          model={this.state.model}
          onChange={this.handleChange}>
          <input type="submit" value="Create post"/>
        </Form>
        <pre>
          {JSON.stringify(this.state.model, null, '  ')}
        </pre>
      </div>
    );
  },

  handleChange(name, value) {
    console.log('name', name, 'value', value);
    var model = this.state.model;
    model.values[name] = value;

    this.setState({model: model});
  }
});

ReactDOM.render(<App/>, document.getElementById('app'));
