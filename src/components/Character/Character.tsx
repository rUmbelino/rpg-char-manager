import { Item } from '../Item';

export const Character = (): JSX.Element => {
  return (
    <div>
      <Item style={{ marginLeft: '50px' }} width="75px" height="75px"></Item>

      <div className="d-flex">
        <Item width="150px" height="300px"></Item>

        <div className="d-flex flex-column">
          <Item width="100px" height="142px"></Item>
          <Item width="100px" height="142px"></Item>
        </div>
      </div>
    </div>
  );
};
