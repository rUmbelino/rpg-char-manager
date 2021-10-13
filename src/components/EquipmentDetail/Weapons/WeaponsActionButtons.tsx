import { Button } from 'react-bootstrap';
import { useInventoryContext } from '../../hocks/Inventory';
import { useItemsContext } from '../../hocks/Items';
import { ActionButtonsProps, ActionButtonTypes } from '../types';

export const WeaponsActionButtons: React.FC<ActionButtonsProps> = ({
  actionButtons,
  handleClose,
  equipment,
}) => {
  const { equipments, addEquipmentToInventory, removeEquipmentFromInventory } =
    useInventoryContext();

  const { weapons, addToItemsWeapon, removeFromItemsWeapon } =
    useItemsContext();

  const isElegibleToInventory = equipments.length < 10;
  const isElegibleToWeapons = weapons.length < 2;

  const cancelButton = {
    description: 'Cancel',
    variant: 'secondary',
    callback: handleClose,
    disable: false,
  };

  const addToInventory = {
    description: 'Add to inventory',
    variant: 'primary',
    disable: !isElegibleToInventory,
    callback: () => {
      addEquipmentToInventory(equipment);
      handleClose();
    },
  };

  const removeFromInventory = {
    description: 'Remove from inventory',
    variant: 'danger',
    disable: false,
    callback: () => {
      removeEquipmentFromInventory(equipment);
      handleClose();
    },
  };

  const equipFromItems = {
    description: 'Equip',
    variant: 'success',
    disable: !isElegibleToWeapons,
    callback: () => {
      addToItemsWeapon(equipment);
      handleClose();
    },
  };

  const equipFromInventory = {
    description: 'Equip',
    variant: 'success',
    disable: !isElegibleToWeapons,
    callback: () => {
      addToItemsWeapon(equipment);
      removeEquipmentFromInventory(equipment);
      handleClose();
    },
  };

  const removeFromEquipedItemsToInventory = {
    description: 'Unequip',
    variant: 'warning',
    disable: !isElegibleToInventory,
    callback: () => {
      removeFromItemsWeapon(equipment);
      addEquipmentToInventory(equipment);
      handleClose();
    },
  };

  const removeFromEquipedItems = {
    description: 'Throw Away',
    variant: 'danger',
    disable: false,
    callback: () => {
      removeFromItemsWeapon(equipment);
      handleClose();
    },
  };

  const buttons = {
    [ActionButtonTypes.LIST_ITEMS]: [
      cancelButton,
      addToInventory,
      equipFromItems,
    ],
    [ActionButtonTypes.INVENTORY]: [
      cancelButton,
      removeFromInventory,
      equipFromInventory,
    ],
    [ActionButtonTypes.EQUIPED_ITEMS]: [
      cancelButton,
      removeFromEquipedItemsToInventory,
      removeFromEquipedItems,
    ],
  };

  const selectedButtons = buttons[actionButtons];

  return (
    <div className="d-flex justify-content-between">
      {selectedButtons?.map(
        ({ description, variant, disable, callback }, index) => {
          return (
            <Button
              key={index}
              variant={variant}
              disabled={disable}
              onClick={callback}
            >
              {description}
            </Button>
          );
        }
      )}
    </div>
  );
};
