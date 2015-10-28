require('react-input-color/lib/input-color.less');
require('react-input-switch/lib/switch.less');
require('react-input-slider/lib/input-slider.less');
require('../lib/select.less');
require('../lib/form.less');
require('./app.less');

var React = require('react');
var ReactDOM = require('react-dom');
var Form = require('../lib/form');
var _package = require('../package.json');

var categories = [
  {name: 'news', id: '123'},
  {name: 'tech', id: '124'},
  {name: 'sports', id: '125'}
];

var App = React.createClass({
  displayName: 'App',

  getInitialState() {
    return {
      model: {
        values: {
          title: 'Sit Tristique Mollis'
        },
        attrs: [
          {name: 'categories', type: 'select', label: 'Categories', options: categories, multiple: true},
          {name: 'published', type: 'boolean', label: 'Published'},
          {name: 'password', type: 'password', label: 'Password'},
          {name: 'cover', type: 'file', label: 'Cover image'},
          {name: 'title', type: 'string', label: 'Title'},
          {name: 'content', type: 'text', label: 'content'},
          {name: 'backgroundColor', type: 'color', label: 'Background Color'},
          {name: 'age', type: 'range', label: 'Age', min: 12, max: 48}
        ]
      }
    };
  },

  render() {
    return (
      <div className="app">
        <div className="col">
          <h1>{_package.name}</h1>
          <h2>{_package.description}</h2>
          <Form
            method="post"
            model={this.state.model}
            onChange={this.handleChange}>
            <input type="submit" value="Create post"/>
          </Form>
        </div>
        <div className="col">
          <pre>
            {JSON.stringify(this.state.model, null, '  ')}
          </pre>
        </div>
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
