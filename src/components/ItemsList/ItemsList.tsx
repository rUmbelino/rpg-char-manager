import { useState } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { useItemsContext } from '../hocks/Items';
import { Modal } from '../Modal';
import { AddItemForm } from './AddItemForm';

export const ItemsList = (): JSX.Element => {
  const style = {
    border: '1px solid black',
    margin: '0.5rem',
    width: '200px',
  };

  const { items } = useItemsContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(items);

  return (
    <div style={style}>
      <Button
        className="w-100 mb-3"
        variant="primary"
        onClick={() => setIsModalOpen(true)}
      >
        Add Item
      </Button>

      <Modal
        show={isModalOpen}
        title="Add Item"
        handleClose={() => setIsModalOpen(false)}
      >
        <AddItemForm handleClose={() => setIsModalOpen(false)} />
      </Modal>
      <ListGroup>
        {items.map(({ name }) => {
          console.log(name);
          return <ListGroup.Item key={name}>{name}</ListGroup.Item>;
        })}
      </ListGroup>
    </div>
  );
};
