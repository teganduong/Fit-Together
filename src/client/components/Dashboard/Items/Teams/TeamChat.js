import React, { Component, PropTypes } from 'react';
import TeamMemberList from './TeamMemberList';

const exampleMembers = [
  {
    name: 'Jeffrey James',
    user_icon: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_02.jpg'
  },
  {
    name: 'Jeffrey James',
    user_icon: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_02.jpg'
  },
  {
    name: 'Jeffrey James',
    user_icon: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_02.jpg'
  },
  {
    name: 'Jeffrey James',
    user_icon: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_02.jpg'
  }
];


class TeamChat extends Component {
	constructor(props) {
    super(props);
	}

  render() {
    return (
      <div className="chat-container clearfix">
      <div className="chat">
        <div className="chat-header">
          <div>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg" alt="avatar" />
          </div>
          <div className="chat-about">
            <div className="chat-with">Chat with Bay Area Hikers</div>
            <div className="chat-num-messages">already have 902 messages</div>
          </div>
        </div>
        <div className="chat-history">
          <ul>
            <li className="clearfix">
              <div className="message-data align-right">
                <span className="message-data-time" >10:10 AM, Today</span> 
                <span className="message-data-name" >Olia</span> <i className="fa fa-circle me"></i>
                
              </div>
              <div className="message other-message float-right">
                Hi Vincent, how are you? How is the project coming along?
              </div>
            </li>
            
            <li>
              <div className="message-data">
                <span className="message-data-name"><i className="fa fa-circle online"></i> Vincent</span>
                <span className="message-data-time">10:12 AM, Today</span>
              </div>
              <div className="message my-message">
                Are we meeting today? Project has been already finished and I have results to show you.
              </div>
            </li>
          </ul>
        </div>        
        <div className="chat-message clearfix">
          <textarea name="message-to-send" id="message-to-send" placeholder="Type your message" rows="3"></textarea>
          <i className="fa fa-file-o"></i>
          <i className="fa fa-file-image-o"></i>
          <button>Send</button>
        </div>
      </div>
      <div className="people-list" id="people-list">
        <div className="search">
          <input type="text" placeholder="search" />
          <i className="fa fa-search"></i>
        </div>
        <TeamMemberList members={exampleMembers} />
      </div>
      </div>
    );
  }
}

export default TeamChat;
