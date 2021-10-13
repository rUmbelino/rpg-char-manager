import { useEffect, useRef, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Equipment } from '../../@types/D&D';
import { EquipmentModal } from '../EquipmentDetail';
import { ActionButtonTypes } from '../EquipmentDetail/types';

interface ArmorListProps {
  items: Equipment[];
  fetchItems: () => void;
}

export const EquipmentItems: React.FC<ArmorListProps> = ({
  items,
  fetchItems,
}) => {
  const [equipment, setEquipment] = useState<Equipment>();

  const fetchEquipmentsOnLoad = useRef(() => {
    if (items.length === 0) {
      fetchItems();
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
        {items.map((equipment, index) => {
          return (
            <ListGroup.Item
              key={`equipment_item_${equipment.index}_${index}`}
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
