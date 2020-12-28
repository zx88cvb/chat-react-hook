import React from 'react';

import Avatar from '@/components/avatar';
import IconButton from '@/components/iconButton';
import Online from './online';
import {
  DivSideBar
} from './style';

function SideBar(props) {

  // icon style
  const iconStyle = {width: '1.4rem', height: '1.4rem'};
  return (
    <DivSideBar>
      <Avatar
        src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4275424924,2201401076&fm=111&gp=0.jpg"
        alt="test"/>
      <Online />
      <div className="button-group">
        <div className="button-item">
          <IconButton
            style={iconStyle}
            xlinkHref="#icon-github" />
        </div>
        <div className="button-item">
          <IconButton
            style={iconStyle}
            xlinkHref="#icon-info" />
        </div>
        <div className="button-item">
          <IconButton
            style={iconStyle}
            xlinkHref="#icon-OFF" />
        </div>
      </div>
    </DivSideBar>
  );
}

export default SideBar;