import React from 'react';
import PropTypes from 'prop-types';

import { Img } from './style';

function Avatar(props) {
  const {
    src,
    alt,
    style
  } = props;
  return (
    <Img
      className="avatar"
      width={style.width}
      height={style.height}
      src={src}
      alt={alt} />
  );
}

// propTypes 传入参数校验
Avatar.propTypes = {
  style: PropTypes.object
};

// 指定 props 的默认值：
Avatar.defaultProps = {
  style: {
    width: '60px',
    height: '60px'
  }
};

export default Avatar;