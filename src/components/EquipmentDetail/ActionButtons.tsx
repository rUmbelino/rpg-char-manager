import { ButtonGroup, Dropdown, ToggleButton } from 'react-bootstrap';
import { useCharacterContext } from '../hocks/Character';
import { useInventoryContext } from '../hocks/Inventory';
import { useItemsContext } from '../hocks/Items';
import { ActionButtonsProps, ActionButtonTypes } from './types';

const MSG_FULL_INVENTARY =
  "You don't have space to equip this! Get rid of something first";
const {
  INVENTORY,
  LIST_ITEMS,
  EQUIPED_ITEMS_ON_HANDS,
  EQUIPED_ITEMS_ON_POCKETS,
  EQUIPED_ITEMS_ON_CHARACTER,
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

  const {
    head,
    setHeadEquipment,
    chest,
    setChestEquipment,
    arms,
    setArmsEquipment,
    legs,
    setLegsEquipment,
  } = useCharacterContext();

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
    description: 'Throw away',
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

  const equipOnHeadFromItems = {
    description: 'Equip on head',
    disable: Boolean(head),
    callback: () => {
      setHeadEquipment(equipment);
      handleClose();
    },
  };

  const equipOnHeadFromInventory = {
    description: 'Equip on head',
    disable: Boolean(head),
    callback: () => {
      setHeadEquipment(equipment);
      removeEquipmentFromInventory(equipment);
      handleClose();
    },
  };

  const equipOnChestFromItems = {
    description: 'Equip on cheast',
    disable: Boolean(chest),
    callback: () => {
      setChestEquipment(equipment);
      handleClose();
    },
  };

  const equipOnChestFromInventory = {
    description: 'Equip on cheast',
    disable: Boolean(chest),
    callback: () => {
      setChestEquipment(equipment);
      removeEquipmentFromInventory(equipment);
      handleClose();
    },
  };

  const equipOnArmsFromItems = {
    description: 'Equip on arms',
    disable: Boolean(arms),
    callback: () => {
      setArmsEquipment(equipment);
      handleClose();
    },
  };

  const equipOnArmsFromInventory = {
    description: 'Equip on arms',
    disable: Boolean(arms),
    callback: () => {
      setArmsEquipment(equipment);
      removeEquipmentFromInventory(equipment);
      handleClose();
    },
  };

  const equipOnLegsFromItems = {
    description: 'Equip on legs',
    disable: Boolean(legs),
    callback: () => {
      setLegsEquipment(equipment);
      handleClose();
    },
  };

  const equipOnLegsFromInventory = {
    description: 'Equip on legs',
    disable: Boolean(legs),
    callback: () => {
      setLegsEquipment(equipment);
      removeEquipmentFromInventory(equipment);
      handleClose();
    },
  };

  const removeFromCharacter = {
    description: 'Throw away',
    variant: 'danger',
    disable: false,
    callback: () => {
      const characterActions = [
        [head, setHeadEquipment],
        [chest, setChestEquipment],
        [arms, setArmsEquipment],
        [legs, setLegsEquipment],
      ];

      characterActions.some((tuple: any) => {
        const [item, callback] = tuple;
        const isCorrecItem = item?.index === equipment.index;
        if (isCorrecItem) {
          callback(undefined);
        }

        return isCorrecItem;
      });

      handleClose();
    },
  };

  const removeFromCharacterToInventory = {
    description: 'Unequip',
    variant: 'warning',
    disable: !isElegibleToInventory,
    callback: () => {
      const characterActions = [
        [head, setHeadEquipment],
        [chest, setChestEquipment],
        [arms, setArmsEquipment],
        [legs, setLegsEquipment],
      ];

      characterActions.some((tuple: any) => {
        const [item, callback] = tuple;
        const isCorrecItem = item?.index === equipment.index;
        if (isCorrecItem) {
          callback(undefined);
        }

        return isCorrecItem;
      });

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
    [EQUIPED_ITEMS_ON_CHARACTER]: [
      cancelButton,
      removeFromCharacter,
      removeFromCharacterToInventory,
    ],
  };

  const groupButtons = {
    [LIST_ITEMS]: [
      {
        description: 'Equip on Items',
        variant: 'success',
        buttons: [equipOnHandFromItems, equipOnPocketsFromItems],
      },
      {
        description: 'Equip on Character',
        variant: 'info',
        buttons: [
          equipOnHeadFromItems,
          equipOnChestFromItems,
          equipOnArmsFromItems,
          equipOnLegsFromItems,
        ],
      },
    ],
    [INVENTORY]: [
      {
        description: 'Equip on Items',
        variant: 'success',
        buttons: [equipOnHandFromInventory, equipOnPocketsFromInventory],
      },
      {
        description: 'Equip on Character',
        variant: 'info',
        buttons: [
          equipOnHeadFromInventory,
          equipOnChestFromInventory,
          equipOnArmsFromInventory,
          equipOnLegsFromInventory,
        ],
      },
    ],
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
        {selectedButtonsGroup?.map((buttonGroups) => {
          return (
            <Dropdown key={buttonGroups.description}>
              <Dropdown.Toggle
                className="rounded-0 text-light h-100"
                variant={buttonGroups.variant}
              >
                {buttonGroups.description}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {buttonGroups.buttons.map(
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
          );
        })}
      </ButtonGroup>
    </div>
  );
};
