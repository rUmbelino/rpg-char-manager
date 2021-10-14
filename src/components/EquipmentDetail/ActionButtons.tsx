import { Button } from 'react-bootstrap';
import { useInventoryContext } from '../hocks/Inventory';
import { useItemsContext } from '../hocks/Items';
import { ActionButtonsProps, ActionButtonTypes } from './types';

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  actionButtons,
  handleClose,
  equipment,
}) => {
  const { equipments, addEquipmentToInventory, removeEquipmentFromInventory } =
    useInventoryContext();

  const {
    items,
    weapons,
    addToItems,
    removeFromItems,
    addToItemsWeapon,
    removeFromItemsWeapon,
  } = useItemsContext();

  const isElegibleToInventory = equipments.length < 10;
  const isElegibleToWeapons = weapons.length < 2;
  const isElegibleToItem = items.length < 4;

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

  const equipOnHandFromItems = {
    description: 'Equip on hand',
    variant: 'success',
    disable: !isElegibleToWeapons,
    callback: () => {
      addToItemsWeapon(equipment);
      handleClose();
    },
  };

  const equipOnHandFromInventory = {
    description: 'Equip on hand',
    variant: 'success',
    disable: !isElegibleToWeapons,
    callback: () => {
      addToItemsWeapon(equipment);
      removeEquipmentFromInventory(equipment);
      handleClose();
    },
  };

  const equipOnPocketsFromItems = {
    description: 'Equip on items',
    variant: 'info',
    disable: !isElegibleToItem,
    callback: () => {
      addToItems(equipment);
      handleClose();
    },
  };

  const equipOnPocketsFromInventory = {
    description: 'Equip on items',
    variant: 'info',
    disable: !isElegibleToItem,
    callback: () => {
      addToItems(equipment);
      removeEquipmentFromInventory(equipment);
      handleClose();
    },
  };

  const removeFromHandsToInventory = {
    description: 'Unequip',
    variant: 'warning',
    disable: !isElegibleToInventory,
    callback: () => {
      removeFromItemsWeapon(equipment);
      addEquipmentToInventory(equipment);
      handleClose();
    },
  };

  const removeFromHands = {
    description: 'Throw Away',
    variant: 'danger',
    disable: false,
    callback: () => {
      removeFromItemsWeapon(equipment);
      handleClose();
    },
  };

  const removeFromPockets = {
    description: 'Throw Away',
    variant: 'danger',
    disable: false,
    callback: () => {
      removeFromItems(equipment);
      handleClose();
    },
  };

  const removeFromPocketsToInventory = {
    description: 'Unequip',
    variant: 'warning',
    disable: !isElegibleToInventory,
    callback: () => {
      removeFromItems(equipment);
      addEquipmentToInventory(equipment);
      handleClose();
    },
  };

  const buttons = {
    [ActionButtonTypes.LIST_ITEMS]: [
      cancelButton,
      addToInventory,
      equipOnHandFromItems,
      equipOnPocketsFromItems,
    ],
    [ActionButtonTypes.INVENTORY]: [
      cancelButton,
      removeFromInventory,
      equipOnHandFromInventory,
      equipOnPocketsFromInventory,
    ],
    [ActionButtonTypes.EQUIPED_ITEMS_ON_HANDS]: [
      cancelButton,
      removeFromHandsToInventory,
      removeFromHands,
    ],
    [ActionButtonTypes.EQUIPED_ITEMS_ON_POCKETS]: [
      cancelButton,
      removeFromPockets,
      removeFromPocketsToInventory,
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
