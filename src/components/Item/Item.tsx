import React from 'react';

type ItemProps = {
  width: string;
  height: string;
  style?: {};
};

export const Item: React.FC<ItemProps> = ({
  width,
  height,
  children,
  style,
}): JSX.Element => {
  const customStyle = {
    border: '1px solid black',
    margin: '0.5rem',
    width,
    height,
    ...style,
  };

  return <div style={customStyle}>{children}</div>;
};
