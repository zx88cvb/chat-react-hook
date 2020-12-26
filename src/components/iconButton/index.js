import React from 'react';
import { DivBtn } from './style';

function IconButton(props) {
  const { xlinkHref } = props;
  return (
    <DivBtn>
      <svg className="icon" aria-hidden="true">
        <use xlinkHref={xlinkHref}></use>
      </svg>
    </DivBtn>
  );
}

export default IconButton;