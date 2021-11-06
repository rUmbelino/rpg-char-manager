import React from 'react';

type ItemProps = {
  width: number;
  height?: string;
  style?: {};
};

export const Item: React.FC<ItemProps> = ({
  width,
  height = '',
  children,
  style,
}): JSX.Element => {
  const divHeight = height ? height : `${width * 0.6}px`;

  const customStyle = {
    border: '1px solid black',
    margin: '0.5rem',
    width: `${width}px`,
    height: divHeight,
    ...style,
  };

  return <div style={customStyle}>{children}</div>;
};
