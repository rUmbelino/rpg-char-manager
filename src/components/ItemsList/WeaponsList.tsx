import { useEffect, useRef, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { EquipmentModal } from '../EquipmentDetail';
import { useEquipmentsContext } from '../hocks/Items';
import { fetchItems } from './controller';

export const WeaponsList = (): JSX.Element => {
  const { weapons, setWeapons } = useEquipmentsContext();
  const [equipmentDetail, setEquipmentDetail] = useState('');

  const fetchEquipmentsOnLoad = useRef(() => {
    if (weapons.length === 0) {
      fetchItems(setWeapons);
    }
  });

  useEffect(() => {
    fetchEquipmentsOnLoad.current();
  }, []);

  return (
    <div>
      {equipmentDetail && (
        <EquipmentModal
          index={equipmentDetail}
          handleClose={() => setEquipmentDetail('')}
        />
      )}
      <ListGroup>
        {weapons.map(({ name, index }) => (
          <ListGroup.Item key={name} onClick={() => setEquipmentDetail(index)}>
            {name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};
