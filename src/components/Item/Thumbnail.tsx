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

  const { name } = equipment;

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
        onClick={() => setIsModalOpen(true)}
        style={{ cursor: 'pointer' }}
        className="d-flex justify-content-center align-items-center position-relative h-100 overflow-hidden"
      >
        <img src={`/images/${name}.png`} height="100%" alt={`${name} icon`} />
        <p className="position-absolute" style={{ bottom: 0 }}>
          {name}
        </p>
      </div>
    </>
  );
};
