import React from 'react';

const Logo = (props) => {
  return (
    <img
      alt="Logo"
      height="50"
      style={{borderRadius: 50}}
      width="50"
      src="/static/logo.jpg"
      {...props}
    />
  );
};

export default Logo;
