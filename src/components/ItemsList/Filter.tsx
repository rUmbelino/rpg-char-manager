import { Form } from 'react-bootstrap';

interface FilterProps {
  value: string;
  onChange: (value: string) => void;
}

export const Filter: React.FC<FilterProps> = ({ value, onChange }) => {
  return (
    <Form className="my-3 mx-1">
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter the equipment name"
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      </Form.Group>
    </Form>
  );
};
