import { Item } from '../Item';

export const Items = (): JSX.Element => {
  const items = [1, 2, 3, 4, 5, 6];
  const renderItems = (id: number) => {
    return (
      <Item width="70px" height="100px" style={{ flex: '1 0 30%' }} key={id} />
    );
  };

  return (
    <div className="d-flex flex-wrap align-items-center">
      {items.map(renderItems)}
    </div>
  );
};
