import React from 'react';

import HeaderBar from './header';
import Message from './message';
import ChatInput from './input';

import { DivChat } from './style';

function Chat(props) {
  return (
    <DivChat>
      <HeaderBar />
      <Message />
      <ChatInput />
    </DivChat>
  );
}

export default Chat;