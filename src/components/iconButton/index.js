import React from 'react';
import { DivBtn } from './style';

function IconButton(props) {
  const { xlinkHref, style } = props;
  return (
    <DivBtn
      className="icon-btn"
      iconWidth = {style.width}
      iconHeight = {style.height}
      color = {style.color}>
      <svg className="icon" aria-hidden="true">
        <use xlinkHref={xlinkHref}></use>
      </svg>
    </DivBtn>
  );
}

export default IconButton;