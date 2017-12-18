"use strict";

console.log('App.js is running!');

// JSX - JavaScript XML
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Indecision App"
  ),
  React.createElement(
    "p",
    null,
    "\u041D\u0430\u043A\u043E\u043D\u0435\u0446-\u0442\u043E \u043C\u043E\u0439 \u043A\u043E\u0434 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442!"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item one"
    ),
    React.createElement(
      "li",
      null,
      "Item two"
    )
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
