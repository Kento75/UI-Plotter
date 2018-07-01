import React, { Component } from 'react'
import marked from 'marked'

class Markdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      html: '',
    }

    this.updateMarkdown = this.updateMarkdown.bind(this)
  }

  updateMarkdown(event) {
    this.setState({
      html: marked(event.target.value)
    })
  }

  render() {
    const html = this.state.html

    return (
    <div className='window'>
      <div className='window-content'>
        <div className='pane-group'>
          <div className='pane'>
            <div className='padded-more'>
              <textarea onChange={this.updateMarkdown}></textarea>
            </div>
          </div>
          <div className='pane'>
            <div className='padded-more'>
              <div className='padded-more' dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Markdown