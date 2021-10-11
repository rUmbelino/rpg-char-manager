import { useState } from 'react';
import { Equipment } from '../../@types/D&D';
import { EquipmentModal } from '../EquipmentDetail';
import { ActionButtonTypes } from '../EquipmentDetail/ActionButtons';

interface ThumbnailProps {
  equipment: Equipment;
}

export const Thumbnail: React.FC<ThumbnailProps> = ({ equipment }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {isModalOpen && (
        <EquipmentModal
          equipment={equipment}
          handleClose={() => setIsModalOpen(false)}
          actionButtons={ActionButtonTypes.INVENTORY}
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
