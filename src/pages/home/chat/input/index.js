import React from 'react';

import useLoginStatus from '@/hooks/useLoginStatus';
import IconButton from '@/components/iconButton';
import { DivInput } from './style';

function ChatInput(props) {
  // icon style
  const iconStyle = {width: '1.8rem',
    height: '1.8rem',
    color: '#a5b5c0',
    hoverColor: 'rgb(5 159 149)'};

  // 判断用户是否登录
  const isLogin = useLoginStatus();

  return (
    <DivInput>
      <div className="button-item">
        <IconButton
          style={iconStyle}
          xlinkHref="#icon-emoji" />
      </div>
      <form className="chat-form">
        <div className="chat-input">
          <input type="text"
            className="msg-input"
            placeholder="说点什么吧.." />
        </div>
      </form>
      <div className="button-item">
        <IconButton
          style={iconStyle}
          xlinkHref="#icon-send" />
      </div>
    </DivInput>
  );
}

export default ChatInput;