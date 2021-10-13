import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Equipment, Weapon } from '../../@types/D&D';
import { Modal } from '../Modal';
import { fetchEquipmentDetail } from './controller';
import { ActionButtonTypes } from './types';
import { WeaponDetail } from './Weapons/WeaponDetail';

interface EquipmentModalProps {
  equipment: Equipment;
  handleClose: () => void;
  actionButtons: ActionButtonTypes;
}

export const EquipmentModal: React.FC<EquipmentModalProps> = ({
  equipment,
  handleClose,
  actionButtons,
}) => {
  const [equipmentDetail, setEquipmentDetail] = useState<{}>();

  useEffect(() => {
    fetchEquipmentDetail(equipment.url).then(setEquipmentDetail);
  }, [equipment.url]);

  return (
    <Modal show handleClose={handleClose}>
      {!equipmentDetail && (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      )}
      {equipmentDetail && (
        <WeaponDetail
          weapon={equipmentDetail as Weapon}
          actionButtons={actionButtons}
          handleClose={handleClose}
        />
      )}
    </Modal>
  );
};
