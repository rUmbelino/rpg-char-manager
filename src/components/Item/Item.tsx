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
    margin: '0.5rem',
    width: `${width}px`,
    height: divHeight,
    border: '10px solid transparent',
    borderImage: 'url(images/border.png) 30% round',
    ...style,
  };

  return <div style={customStyle}>{children}</div>;
};
