import React from 'react';

import SideBar from './sideBar';
import FunctionBar from './functionBar';
import Chat from './chat';
import {
  Main
} from './style';

function Home(props) {
  return (
    <Main>
      <div className="container">
        <div className="chat-group chat-block">
          <SideBar />
          <FunctionBar />
          <Chat />
        </div>
      </div>
      
    </Main>
  );
}

export default Home;