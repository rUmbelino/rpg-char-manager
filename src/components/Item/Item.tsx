import React from 'react';
import styled from 'styled-components';

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
  const Box = styled.div`
    border: 1px solid black;
    margin: 0.5rem;
    width: ${width};
    height: ${height};
  `;

  return <Box style={style}>{children}</Box>;
};
