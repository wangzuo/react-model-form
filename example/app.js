require('react-input-color/lib/input-color.less');
require('react-input-switch/lib/switch.less');
require('react-input-slider/lib/input-slider.less');
require('../lib/form.less');
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
          {name: 'password', type: 'password', label: 'Password'},
          {name: 'cover', type: 'file', label: 'Cover image'},
          {name: 'title', type: 'string', label: 'Title'},
          {name: 'content', type: 'text', label: 'content'},
          {name: 'backgroundColor', type: 'color', label: 'Background Color'},
          {name: 'age', type: 'range', label: 'Age', min: 12, max: 48}
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
