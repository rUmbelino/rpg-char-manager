import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Weapon } from '../../@types/D&D';
import { Modal } from '../Modal';
import { ActionButtonTypes } from './ActionButtons';
import { fetchEquipmentDetail } from './controller';
import { WeaponDetail } from './WeaponDetail';

interface EquipmentModalProps {
  index: string;
  handleClose: () => void;
}

export const EquipmentModal: React.FC<EquipmentModalProps> = ({
  index,
  handleClose,
}) => {
  const [equipment, setEquipment] = useState<{}>();

  useEffect(() => {
    fetchEquipmentDetail(index).then(setEquipment);
  }, [index]);

  return (
    <Modal show handleClose={handleClose}>
      {!equipment && (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      )}
      {equipment && (
        <WeaponDetail
          weapon={equipment as Weapon}
          actionButtons={ActionButtonTypes.INVENTORY}
          handleClose={handleClose}
        />
      )}
    </Modal>
  );
};
