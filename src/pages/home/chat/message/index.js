import React from 'react';

import Avatar from '@/components/avatar';

import { DivMessage } from './style';


function Message(props) {
  // 头像样式
  const avatarStyle = {width: '44px', height: '44px'};

  return (
    <DivMessage>
      <div className="message-item">
        <Avatar
          style={avatarStyle}
          src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4275424924,2201401076&fm=111&gp=0.jpg"
          alt="test"/>
        <div className="message-content">
          <div className="item-nickname">
            <span className="nickname">angel</span>
            <time className="time">09:46</time>
          </div>
          <div className="content-block">
            <div className="content">
              <div className="text-message">hello,吃了没</div>
            </div>
          </div>
        </div>
      </div>
    </DivMessage>
  );
}

export default Message;