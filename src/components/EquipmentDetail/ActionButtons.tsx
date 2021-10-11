import { Button } from 'react-bootstrap';
import { Equipment } from '../../@types/D&D';
import { useInventoryContext } from '../hocks/Inventory';

export enum ActionButtonTypes {
  ITENS_LIST,
  INVENTORY,
}

interface ActionButtonsProps {
  actionButtons: ActionButtonTypes;
  handleClose: () => void;
  equipment: Equipment;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  actionButtons,
  handleClose,
  equipment,
}) => {
  const { addEquipmentToInventory, removeEquipmentFromInventory } =
    useInventoryContext();

  const cancelButton = {
    description: 'Cancel',
    variant: 'secondary',
    callback: handleClose,
  };

  const addToInventory = {
    description: 'Add to inventory',
    variant: 'primary',
    callback: () => {
      addEquipmentToInventory(equipment);
      handleClose();
    },
  };

  const removeFromInventory = {
    description: 'Remove from inventory',
    variant: 'danger',
    callback: () => {
      removeEquipmentFromInventory(equipment.index);
      handleClose();
    },
  };

  const equip = {
    description: 'Equip',
    variant: 'success',
    callback: handleClose,
  };

  const buttons = {
    [ActionButtonTypes.ITENS_LIST]: [cancelButton, addToInventory, equip],
    [ActionButtonTypes.INVENTORY]: [cancelButton, removeFromInventory],
  };

  const selectedButtons = buttons[actionButtons];

  return (
    <div className="d-flex justify-content-between">
      {selectedButtons?.map(({ description, variant, callback }, index) => {
        return (
          <Button key={index} variant={variant} onClick={callback}>
            {description}
          </Button>
        );
      })}
    </div>
  );
};
