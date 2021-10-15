import { ButtonGroup, Dropdown, ToggleButton } from 'react-bootstrap';
import { useInventoryContext } from '../hocks/Inventory';
import { useItemsContext } from '../hocks/Items';
import { ActionButtonsProps, ActionButtonTypes } from './types';

const MSG_FULL_INVENTARY = 'Your inventory is full! Get rid of something first';
const {
  INVENTORY,
  LIST_ITEMS,
  EQUIPED_ITEMS_ON_HANDS,
  EQUIPED_ITEMS_ON_POCKETS,
} = ActionButtonTypes;

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

  const isElegibleToItem = items.length < 4;
  const isElegibleToWeapons = weapons.length < 2;
  const isElegibleToInventory = equipments.length < 10;

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
    disable: !isElegibleToWeapons,
    callback: () => {
      addToItemsWeapon(equipment);
      handleClose();
    },
  };

  const equipOnHandFromInventory = {
    description: 'Equip on hand',
    disable: !isElegibleToWeapons,
    callback: () => {
      addToItemsWeapon(equipment);
      removeEquipmentFromInventory(equipment);
      handleClose();
    },
  };

  const equipOnPocketsFromItems = {
    description: 'Equip on pocket',
    disable: !isElegibleToItem,
    callback: () => {
      addToItems(equipment);
      handleClose();
    },
  };

  const equipOnPocketsFromInventory = {
    description: 'Equip on pocket',
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
    [LIST_ITEMS]: [cancelButton, addToInventory],
    [INVENTORY]: [cancelButton, removeFromInventory],
    [EQUIPED_ITEMS_ON_HANDS]: [
      cancelButton,
      removeFromHandsToInventory,
      removeFromHands,
    ],
    [EQUIPED_ITEMS_ON_POCKETS]: [
      cancelButton,
      removeFromPockets,
      removeFromPocketsToInventory,
    ],
  };

  const groupButtons = {
    [LIST_ITEMS]: {
      description: 'Equip on Items',
      variant: 'success',
      buttons: [equipOnHandFromItems, equipOnPocketsFromItems],
    },
    [INVENTORY]: {
      description: 'Equip on Items',
      variant: 'success',
      buttons: [equipOnHandFromInventory, equipOnPocketsFromInventory],
    },
  };

  const getSelectedButtonGroup = () => {
    if (actionButtons === LIST_ITEMS || actionButtons === INVENTORY) {
      return groupButtons[actionButtons];
    }
  };

  const selectedButtons = buttons[actionButtons];
  const selectedButtonsGroup = getSelectedButtonGroup();

  return (
    <div className="d-flex">
      <ButtonGroup style={{ flex: 1 }}>
        {selectedButtons?.map(
          ({ description, variant, disable, callback }, index) => {
            return (
              <ToggleButton
                key={index}
                variant={variant}
                disabled={disable}
                onClick={callback}
                value={description}
                className="text-light rounded-0"
              >
                {description}
              </ToggleButton>
            );
          }
        )}

        {selectedButtonsGroup && (
          <Dropdown>
            <Dropdown.Toggle
              className="rounded-0"
              variant={selectedButtonsGroup.variant}
            >
              {selectedButtonsGroup.description}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {selectedButtonsGroup.buttons.map(
                ({ callback, disable, description }) => {
                  return (
                    <Dropdown.Item
                      key={`dropdown-item_${description}`}
                      className={`${disable ? 'text-black-50' : ''}`}
                      onClick={() => {
                        if (disable) {
                          return alert(MSG_FULL_INVENTARY);
                        }
                        callback();
                      }}
                    >
                      {description}
                    </Dropdown.Item>
                  );
                }
              )}
            </Dropdown.Menu>
          </Dropdown>
        )}
      </ButtonGroup>
    </div>
  );
};
