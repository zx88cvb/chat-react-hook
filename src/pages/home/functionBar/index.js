import React from 'react';

import IconButton from '@/components/iconButton';
import { DivFun } from './style';

function FuntionBar(props) {
  // icon style
  const iconStyle = {width: '1.4rem', height: '1.4rem'};

  return (
    <DivFun>
      <div className="list-grid">
        <div className="fun-bar">
          <div className="search">
            <input type="text" placeholder="搜索群组/用户" />
          </div>
          <div className="icon-search">
            <IconButton
              style={iconStyle}
              xlinkHref="#icon-search" />
          </div>
        </div>
      </div>
    </DivFun>
  );
}

export default FuntionBar;