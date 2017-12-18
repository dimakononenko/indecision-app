console.log('App.js is running!');

// JSX - JavaScript XML
var template = (
  <div>
    <h1>Indecision App</h1>
    <p>Наконец-то мой код работает!</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);