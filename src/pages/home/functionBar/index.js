import React from 'react';

import IconButton from '@/components/iconButton';
import ContactList from './list';
import { DivFun } from './style';

function FuntionBar(props) {
  // icon style
  const iconStyle = {width: '1.4rem', height: '1.4rem'};
  const iconClearStyle = {width: '32px', height: '32px', color: 'rgba(5,159,149, 1.05)'};

  return (
    <DivFun>
      <div className="list-grid">
        <div className="fun-bar">
          <div className="search">
            <input type="text" placeholder="搜索群组/用户" />
            <IconButton
              style={iconClearStyle}
              xlinkHref="#icon-clear" />
          </div>
          <div className="icon-search">
            <IconButton
              style={iconStyle}
              xlinkHref="#icon-search" />
          </div>
          {/* <div className="icon-add">
            <IconButton
                style={iconStyle}
                xlinkHref="#icon-add" />
          </div> */}
        </div>
        <ContactList />
      </div>
    </DivFun>
  );
}

export default FuntionBar;