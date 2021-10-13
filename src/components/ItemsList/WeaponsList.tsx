import { useEffect, useRef, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Equipment } from '../../@types/D&D';
import { EquipmentModal } from '../EquipmentDetail';
import { ActionButtonTypes } from '../EquipmentDetail/types';
import { useEquipmentsContext } from '../hocks/Equipments';
import { fetchEquipments } from './controller';

export const WeaponsList = (): JSX.Element => {
  const { weapons, setWeapons } = useEquipmentsContext();
  const [equipment, setEquipment] = useState<Equipment>();

  const fetchEquipmentsOnLoad = useRef(() => {
    if (weapons.length === 0) {
      fetchEquipments(setWeapons, '/api/equipment-categories/weapon');
    }
  });

  useEffect(() => {
    fetchEquipmentsOnLoad.current();
  }, []);

  return (
    <div>
      {equipment && (
        <EquipmentModal
          equipment={equipment}
          handleClose={() => setEquipment(undefined)}
          actionButtons={ActionButtonTypes.LIST_ITEMS}
        />
      )}
      <ListGroup>
        {weapons.map((equipment) => {
          return (
            <ListGroup.Item
              key={`weapon_list_${equipment.name}`}
              onClick={() => setEquipment(equipment)}
            >
              {equipment.name}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
};
