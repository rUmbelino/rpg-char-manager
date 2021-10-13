import { useState } from 'react';
import { Equipment } from '../../@types/D&D';
import { EquipmentModal } from '../EquipmentDetail';
import { ActionButtonTypes } from '../EquipmentDetail/types';

interface ThumbnailProps {
  equipment?: Equipment;
  actionButtons: ActionButtonTypes;
}

export const Thumbnail: React.FC<ThumbnailProps> = ({
  equipment,
  actionButtons,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!equipment) {
    return null;
  }

  return (
    <>
      {isModalOpen && (
        <EquipmentModal
          equipment={equipment}
          handleClose={() => setIsModalOpen(false)}
          actionButtons={actionButtons}
        />
      )}
      <div
        className="d-flex justify-content-center align-items-center h-100"
        onClick={() => setIsModalOpen(true)}
      >
        {equipment.name}
      </div>
    </>
  );
};
