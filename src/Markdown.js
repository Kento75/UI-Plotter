import React, { Component } from 'react';
import marked from 'marked';

class Markdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      html: '',
    };

    this.updateMarkdown = this.updateMarkdown.bind(this);
  }

  updateMarkdown(event) {
    this.setState({
      html: marked(event.target.value)
    });
  }

  render() {
    const html = this.state.html;

    return (<div>
      <h1>Markdown Input</h1>
      <textarea onChange={this.updateMarkdown}></textarea>
      <h1>Markdown Output</h1>
      <div dangerouslySetInnerHTML={{
          __html: html
        }}></div>
    </div>);
  }
}

export default Markdown;