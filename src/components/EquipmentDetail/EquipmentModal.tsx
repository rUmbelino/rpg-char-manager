import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import {
  AdventuringGear,
  Armor,
  Equipment,
  EquipmentCategoryIndex,
  Weapon,
} from '../../@types/D&D';
import { Modal } from '../Modal';
import { AdventuringGearDetail } from './AdventuringGear/AdventuringGear';
import { ArmorDetail } from './Armor/ArmorDetail';
import { fetchData } from './controller';
import { ActionButtonTypes } from './types';
import { WeaponDetail } from './Weapons/WeaponDetail';

interface EquipmentWithCategory {
  equipment_category: {
    index: EquipmentCategoryIndex;
  };
  name: string;
}

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
  const [equipmentDetail, setEquipmentDetail] =
    useState<EquipmentWithCategory>();

  useEffect(() => {
    fetchData<EquipmentWithCategory>(equipment.url).then(setEquipmentDetail);
  }, [equipment.url]);

  const hasCorrectIndex = (index: EquipmentCategoryIndex): boolean => {
    if (!equipmentDetail) {
      return false;
    }

    return equipmentDetail?.equipment_category?.index === index;
  };

  const isArmorDetail = hasCorrectIndex(EquipmentCategoryIndex.ARMOR);
  const isWeaponDetail = hasCorrectIndex(EquipmentCategoryIndex.WEAPON);
  const isGearDetail = hasCorrectIndex(EquipmentCategoryIndex.ADVENTURING_GEAR);

  return (
    <Modal show handleClose={handleClose} title={equipmentDetail?.name}>
      <img
        className="d-block m-auto"
        src={`/images/${equipment.name.toLocaleLowerCase()}.png`}
        alt={`${equipment.name} icon`}
        height="100%"
      />
      {!equipmentDetail && (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      )}
      {isArmorDetail && (
        <ArmorDetail
          armor={equipmentDetail as Armor}
          actionButtons={actionButtons}
          handleClose={handleClose}
        />
      )}
      {isWeaponDetail && (
        <WeaponDetail
          weapon={equipmentDetail as Weapon}
          actionButtons={actionButtons}
          handleClose={handleClose}
        />
      )}
      {isGearDetail && (
        <AdventuringGearDetail
          gear={equipmentDetail as AdventuringGear}
          actionButtons={actionButtons}
          handleClose={handleClose}
        />
      )}
    </Modal>
  );
};
