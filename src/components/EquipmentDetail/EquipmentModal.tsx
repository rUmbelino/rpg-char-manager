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
      <div className="d-flex py-3">
        <div>
          <img
            className="d-block m-auto"
            alt={`${equipment.name} icon`}
            src={`/images/${equipment.name.toLocaleLowerCase()}.png`}
          />
        </div>
        <div style={{ flexGrow: 2 }}>
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
        </div>
      </div>
    </Modal>
  );
};
