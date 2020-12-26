import React from 'react';
import { Img } from './style';

function Avatar(props) {
  const {
    src,
    alt
  } = props;
  return (
    <Img
      className="avatar"
      src={src}
      alt={alt} />
  );
}

export default Avatar;