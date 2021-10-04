import { Item } from '../Item';

export const Items = (): JSX.Element => {
  const items = [1, 1, 1, 1, 1, 1];
  const renderItems = () => {
    return <Item width="70px" height="100px" style={{ flex: '1 0 30%' }} />;
  };

  return (
    <div className="d-flex flex-wrap align-items-center">
      {items.map(renderItems)}
    </div>
  );
};
