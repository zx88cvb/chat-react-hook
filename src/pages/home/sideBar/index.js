import React from 'react';

import Avatar from '@/components/avatar';
import IconButton from '@/components/iconButton';
import {
  DivSideBar
} from './style';

function SideBar(props) {
  return (
    <DivSideBar>
      <Avatar
        src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4275424924,2201401076&fm=111&gp=0.jpg"
        alt="test"/>
      <div className="button-group">
        <IconButton xlinkHref="#icon-github" />
        <IconButton xlinkHref="#icon-OFF" />
      </div>
    </DivSideBar>
  );
}

export default SideBar;