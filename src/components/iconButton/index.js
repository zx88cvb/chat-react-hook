import React from 'react';
import PropTypes from 'prop-types';

import { DivBtn } from './style';

function IconButton(props) {
  const { xlinkHref, style } = props;
  return (
    <DivBtn
      className="icon-btn"
      iconWidth = {style.width}
      iconHeight = {style.height}
      color = {style.color}
      hoverColor = {style.hoverColor}>
      <svg className="icon" aria-hidden="true">
        <use xlinkHref={xlinkHref}></use>
      </svg>
    </DivBtn>
  );
}

// propTypes 传入参数校验
IconButton.propTypes = {
  style: PropTypes.object
};

// 指定 props 的默认值：
IconButton.defaultProps = {
  style: {
    width: '1.4rem',
    height: '1.4rem',
    color: '',
    hoverColor: ''
  }
};

export default IconButton;