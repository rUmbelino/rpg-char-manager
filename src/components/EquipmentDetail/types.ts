import { Equipment } from '../../@types/D&D';

export enum ActionButtonTypes {
  INVENTORY,
  LIST_ITEMS,
  EQUIPED_ITEMS_ON_HANDS,
  EQUIPED_ITEMS_ON_POCKETS,
  EQUIPED_ITEMS_ON_CHARACTER,
}

export interface ActionButtonsProps {
  actionButtons: ActionButtonTypes;
  handleClose: () => void;
  equipment: Equipment;
}
