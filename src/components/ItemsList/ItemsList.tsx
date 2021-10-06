import { useEffect, useRef, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { EquipmentModal } from '../EquipmentDetail';
import { useEquipmentssContext } from '../hocks/Items';
import { fetchItems } from './controller';

export const ItemsList = (): JSX.Element => {
  const style = {
    border: '1px solid black',
    margin: '0.5rem',
    width: '200px',
    maxHeight: '500px',
    overflow: 'scroll',
  };

  const { equipments, setEquipments } = useEquipmentssContext();
  const [equipmentDetail, setEquipmentDetail] = useState('');

  const fetchEquipmentsOnLoad = useRef(() => {
    if (equipments.length === 0) {
      fetchItems({ setEquipments });
    }
  });

  useEffect(() => {
    fetchEquipmentsOnLoad.current();
  }, []);

  return (
    <div style={style}>
      {equipmentDetail && (
        <EquipmentModal
          index={equipmentDetail}
          handleClose={() => setEquipmentDetail('')}
        />
      )}
      <ListGroup>
        {equipments.map(({ name, index }) => (
          <ListGroup.Item key={name} onClick={() => setEquipmentDetail(index)}>
            {name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};
