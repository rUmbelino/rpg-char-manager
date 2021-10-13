import { Equipment } from '../../@types/D&D';

export enum ActionButtonTypes {
  INVENTORY,
  LIST_ITEMS,
  EQUIPED_ITEMS,
}

export interface ActionButtonsProps {
  actionButtons: ActionButtonTypes;
  handleClose: () => void;
  equipment: Equipment;
}
