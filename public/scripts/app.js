'use strict';

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of comouter',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  // e. here acts as the element the event started on
  var option = e.target.elements.option.value;
  //by default empty string = 0, so if it's true code will run
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

var OnRemoveAll = function OnRemoveAll() {
  app.options = [];
  render();
};

var appRoot = document.getElementById('app');

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  alert(option);
};

var numbers = [99, 45, 9850];
var i = 0;

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
    ),
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? 'Here are my options:' : 'No options'
    ),
    React.createElement(
      'button',
      { disabled: app.options.length === 0, onClick: onMakeDecision },
      'What should I do?'
    ),
    React.createElement(
      'button',
      { onClick: OnRemoveAll },
      'Remove ALL'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: i++ },
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add option'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};
render();
