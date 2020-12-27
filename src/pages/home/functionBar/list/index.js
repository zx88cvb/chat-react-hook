import React from 'react';

import Avatar from '@/components/avatar';

import { DivList } from './style';

function ContactList(props) {
  const avatarStyle = {width: '48px', height: '48px'};
  return (
    <DivList>
      <div className="list-item focus">
        <Avatar
          style={avatarStyle}
          src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4275424924,2201401076&fm=111&gp=0.jpg"
          alt="test"/>
        <div className="item-content">
          <div className="item-title item-row">
            <p className="name">angel</p>
            <time className="time">15:04</time>
          </div>
          <div className="item-preview item-row">
            <p className="preview">angel: 哈哈</p>
          </div>
        </div>
      </div>
      <div className="list-item">
        <Avatar
          style={avatarStyle}
          src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4275424924,2201401076&fm=111&gp=0.jpg"
          alt="test"/>
        <div className="item-content">
          <div className="item-title item-row">
            <p className="name">angel</p>
            <time className="time">15:04</time>
          </div>
          <div className="item-preview item-row">
            <p className="preview">angel: 哈哈</p>
          </div>
        </div>
      </div>
    </DivList>
  );
}

export default ContactList;