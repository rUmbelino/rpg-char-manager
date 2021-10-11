import { Accordion } from 'react-bootstrap';
import { WeaponsList } from './WeaponsList';

export const ItemsList = (): JSX.Element => {
  const style = {
    border: '1px solid black',
    margin: '0.5rem',
    width: '200px',
    maxHeight: '500px',
    overflow: 'scroll',
  };

  return (
    <div style={style}>
      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Weapons</Accordion.Header>
          <Accordion.Body className="p-0">
            <WeaponsList />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
