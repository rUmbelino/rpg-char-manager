import { useState } from 'react';
import { Equipment } from '../../@types/D&D';
import { EquipmentModal } from '../EquipmentDetail';
import { ActionButtonTypes } from '../EquipmentDetail/types';
import './thumbnail.css';

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
        className="d-flex justify-content-center align-items-center position-relative h-100 overflow-hidden show-p-on-hover"
      >
        <img
          height="130%"
          alt={`${name} icon`}
          src={`/images/${name.toLocaleLowerCase()}.png`}
        />
        <p className="position-absolute" style={{ bottom: '-10px' }}>
          {name}
        </p>
      </div>
    </>
  );
};
