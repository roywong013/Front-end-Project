import React from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";
import { marked } from "https://cdn.skypack.dev/marked";


var renderer = new marked.Renderer();

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

marked.setOptions({
  breaks: true,
  renderer: renderer,
  sanitize: true });



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown: placeholder };

    this.handleChange = this.handleChange.bind(this);
    this.converter = this.converter.bind(this);
  }

  handleChange(event) {
    this.setState({
      markdown: event.target.value });

  }

  converter() {
    let x = marked(this.state.markdown);
    return { __html: x };
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "flexbox" }, /*#__PURE__*/
      React.createElement(Editor, { handleChange: this.handleChange, markdown: this.state.markdown }), /*#__PURE__*/
      React.createElement(Previewer, { markdown: this.state.markdown })));


  }}



class Editor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "edit" }, /*#__PURE__*/
      React.createElement("h1", { id: "editor-header", class: "header" }, "Editor"), /*#__PURE__*/
      React.createElement("textarea", { id: "editor", value: this.props.markdown, onChange: this.props.handleChange })));


  }}





class Previewer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "previewer-board" }, /*#__PURE__*/
      React.createElement("h1", { id: "previewer", class: "header" }, "Previewer"), /*#__PURE__*/
      React.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: marked(this.props.markdown, { renderer: renderer }) },

        id: "preview" })));




  }}



ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));