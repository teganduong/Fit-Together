import React, { Component, PropTypes } from 'react';

class TeamChat extends Component {
	constructor(props) {
	  super(props);
	}

	render() {
	  return (
        <div className="chat">
          <div className="chat-header">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg" alt="avatar" />
            <div class="chat-about">
              <div class="chat-with">Chat with Team</div>
              <div class="chat-num-messages">already 1 902 messages</div>
            </div>
          </div>
        </div>
	  );
	}
}

export default TeamChat;
