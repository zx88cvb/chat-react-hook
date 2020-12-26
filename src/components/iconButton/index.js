import React from 'react';
import { DivBtn } from './style';

function IconButton(props) {
  const { xlinkHref, style } = props;
  return (
    <DivBtn
      iconWidth = {style.width}
      iconHeight = {style.height}>
      <svg className="icon" aria-hidden="true">
        <use xlinkHref={xlinkHref}></use>
      </svg>
    </DivBtn>
  );
}

export default IconButton;