import { Item } from '../Item';

export const Character = (): JSX.Element => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <Item width="75px" height="75px"></Item>
      </div>
      <div className="d-flex">
        <div>
          <Item width="80px" height="100px"></Item>
          <Item width="80px" height="100px"></Item>
        </div>
        <Item width="150px" height="300px"></Item>
        <div>
          <Item width="80px" height="100px"></Item>
          <Item width="80px" height="100px"></Item>
        </div>
      </div>
    </div>
  );
};
