import { Button } from 'react-bootstrap';

export enum ActionButtonTypes {
  INVENTORY,
}

interface ActionButtonsProps {
  actionButtons: ActionButtonTypes;
  handleClose: () => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  actionButtons,
  handleClose,
}) => {
  const cancelButton = {
    description: 'Cancel',
    variant: 'secondary',
    callback: handleClose,
  };

  const addToInventory = {
    description: 'Add to inventory',
    variant: 'primary',
    callback: handleClose,
  };

  const equip = {
    description: 'Equip',
    variant: 'success',
    callback: handleClose,
  };

  const buttons = {
    [ActionButtonTypes.INVENTORY]: [cancelButton, addToInventory, equip],
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
