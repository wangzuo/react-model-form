require('../lib/form.css');

var React = require('react');
var ReactDOM = require('react-dom');
var Form = require('../lib/model-form');

var App = React.createClass({
  displayName: 'App',

  getInitialState() {
    return {
      model: {
        attrs: [
          {name: 'title', type: 'String', label: 'Title'},
          {name: 'content', type: 'Text', label: 'Content'}
        ],
        values: {
          title: 'Sit Tristique Mollis',
          content: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
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
      </div>
    );
  },

  handleChange(name, value) {
    console.log('handleChange', name, value);
    var model = this.state.model;
    model.values[name] = value;

    this.setState({model: model});
  }
});

ReactDOM.render(<App/>, document.getElementById('app'));
