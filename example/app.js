require('react-input-color/lib/input-color.less');
require('react-input-switch/lib/switch.less');
require('react-input-slider/lib/input-slider.less');
require('react-select/dist/react-select.css');
require('../lib/form.less');
require('./app.less');

var React = require('react');
var ReactDOM = require('react-dom');
var elements = require('../lib/elements');
var Form = require('../lib/form')(elements);
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
          {name: 'categories', type: 'select', label: 'Categories', options: categories, multiple: true, select_label: 'name', 'select_value': 'id'},
          {name: 'published', type: 'boolean', label: 'Published'},
          {name: 'publish_date', type: 'datetime', label: 'Publish Date'},
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
        <div className="row">
          <h1>{_package.name}</h1>
          <h2>{_package.description}</h2>
        </div>
        <div className="row">
          <div className="col">
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
