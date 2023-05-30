const React = require('react');
const ReactDOMServer = require('react-dom/server');
const SignupForm = require('./SignupForm');

function App() {
  return (
    React.createElement('div', null,
      React.createElement('h1', null, '회원가입 페이지'),
      React.createElement(SignupForm, null)
    )
  );
}

const appHtml = ReactDOMServer.renderToString(React.createElement(App, null));
console.log(appHtml);
