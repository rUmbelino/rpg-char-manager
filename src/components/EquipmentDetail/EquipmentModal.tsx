import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Equipment, Weapon } from '../../@types/D&D';
import { Modal } from '../Modal';
import { ActionButtonTypes } from './ActionButtons';
import { fetchEquipmentDetail } from './controller';
import { WeaponDetail } from './WeaponDetail';

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
    fetchEquipmentDetail(equipment.index).then(setEquipmentDetail);
  }, [equipment.index]);

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
