import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Messages extends Component {
  constructor() {
    super();
  }

  render(){
    let messagesList = this.props.messages.map(function(message, i){
      let text = message.text;
      return (
        <div key={i} className="message">
          <a href={"https://twitter.com/"+ message.name +"/"} target="_blank">
            <img src={"https://twitter.com/"+ message.name +"/profile_image" }className="message_profile-pic" />
          </a>
          <a href={"https://twitter.com/"+ message.name +"/"} target="_blank" className="message_username">{message.name}</a>
          <span className="message_timestamp">{message.time.toLocaleTimeString()}</span>
          <span className="message_content" dangerouslySetInnerHTML={{__html: text}}></span>
        </div>
      )
    })

    return (
      <div id="message-list">
        <div className="time-divide">
          <span className="date"></span>
        </div>
        {messagesList}
      </div>
    )

  }

}
