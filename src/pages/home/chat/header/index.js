import React from 'react';

import IconButton from '@/components/iconButton';
import { DivHeaderBar } from './style';

function HeaderBar(props) {
  // icon style
  const iconStyle = {width: '1.6rem',
    height: '1.6rem',
    color: 'rgb(5 159 149)',
    hoverColor: 'rgb(5, 159, 149, 0.70)'};

  return (
    <DivHeaderBar>
      <h2 className="title">
        <span>
          friend<b>(3)</b>
        </span>
      </h2>
      <div className="button-group">
        <div className="button-item">
          <IconButton
            style={iconStyle}
            xlinkHref="#icon-share" />
        </div>
        <div className="button-item">
          <IconButton
            style={iconStyle}
            xlinkHref="#icon-more" />
        </div>
      </div>
    </DivHeaderBar>
  );
}

export default HeaderBar;