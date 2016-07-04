import React, { Component, PropTypes } from 'react';
import TeamMemberList from './TeamMemberList';

const exampleUser = {
  name: 'Jessica Jones',
  user_icon: 'https://s-media-cache-ak0.pinimg.com/564x/7c/1d/15/7c1d156f6e62f5559e8fada72b2117f7.jpg'
};


const exampleMembers = [
  {
    name: 'Jeffrey James',
    user_icon: 'https://zsuttonphoto.com/wp-content/uploads/2015/11/Trevor-Wayne-LA-Headshot-Photography-1.jpg'
  },
  {
    name: 'Stephanie Mills',
    user_icon: 'http://getparade.com/media/imagic/square3.jpg'
  },
  {
    name: 'Jeffrey James',
    user_icon: 'http://www.timo-wadenpohl.de/files/tw/content/about/timo_wadenpohl_portrait.jpg'
  },
  {
    name: 'Allison Graham',
    user_icon: 'http://d38we5ntdyxyje.cloudfront.net/857749/profile/KZPZNEAZ_avatar_medium_square.jpg'
  }
];

const exampleTeamMessages = [

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
            <img className="img-circle user-icon" src={exampleUser.user_icon} alt="avatar" />
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
