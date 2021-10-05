import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import {
  getItemsFromStorage,
  setItemsInStorage,
} from '../../utils/itemStorage';
import { useItemsContext } from '../hocks/Items';

interface AddItemFormProps {
  handleClose: () => void;
}

export const AddItemForm: React.FC<AddItemFormProps> = ({ handleClose }) => {
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const { setItems } = useItemsContext();

  const isValidUrl = (value: string) => {
    return value.startsWith('http');
  };

  const validateFileds = () => {
    if (!name) {
      throw new Error('Please set a valid name!');
    }

    if (!isValidUrl(url)) {
      throw new Error('Please set a valid URL!');
    }
  };

  const saveItem = () => {
    try {
      validateFileds();

      const items = getItemsFromStorage();
      items.push({ name, url });

      setItemsInStorage(items);
      setItems(items);
      handleClose();
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          placeholder="Enter the item name"
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Image</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter the item image URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </Form.Group>
      {error && <Alert variant="danger">{error}</Alert>}
      <Button variant="primary" onClick={saveItem}>
        Save
      </Button>
    </Form>
  );
};
