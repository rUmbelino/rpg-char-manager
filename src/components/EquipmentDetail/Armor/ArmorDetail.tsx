import { Table } from 'react-bootstrap';
import { Armor } from '../../../@types/D&D';
import { EquipmentLine } from '../EquipmentLine';
import { ActionButtonTypes } from '../types';
import { ActionButtons } from '../ActionButtons';

interface ArmorDetailProps {
  armor: Armor;
  actionButtons: ActionButtonTypes;
  handleClose: () => void;
}

export const ArmorDetail: React.FC<ArmorDetailProps> = ({
  armor,
  actionButtons,
  handleClose,
}) => {
  const {
    armor_category,
    armor_class,
    cost,
    equipment_category,
    index,
    name,
    stealth_disadvantage,
    str_minimum,
    url,
    weight,
    desc,
  } = armor;

  const getArmorClassDescription = (): string => {
    if (!armor_class) return '';
    const { base, dex_bonus, max_bonus } = armor_class;
    const maxBonus = max_bonus ? `Max Bonus: ${max_bonus}` : '';
    return `Base: ${base}, Dex Bonus: ${dex_bonus} ${maxBonus}`;
  };

  const renderFullArmorItems = () => {
    return (
      <>
        <EquipmentLine name="Armor Category" description={armor_category} />
        <EquipmentLine
          name="Armor Class"
          description={getArmorClassDescription()}
        />
        <EquipmentLine
          name="Cost"
          description={`${cost?.quantity} ${cost?.unit}`}
        />
        <EquipmentLine
          name="Stealth Disadvantage"
          description={stealth_disadvantage}
        />
        <EquipmentLine name="Minumum Strength" description={str_minimum} />
        <EquipmentLine name="Weight" description={weight} />
      </>
    );
  };

  const renderDescription = () => {
    return (
      <EquipmentLine name="Details" description={desc?.join('. ') || ''} />
    );
  };

  return (
    <div>
      <h2 className="mb-2 text-center">{name}</h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <EquipmentLine name="Index" description={index} />
          <EquipmentLine name="Name" description={name} />
          <EquipmentLine
            name="Category"
            description={equipment_category?.name}
          />
          {desc ? renderDescription() : renderFullArmorItems()}
        </tbody>
      </Table>
      <ActionButtons
        actionButtons={actionButtons}
        handleClose={handleClose}
        equipment={{
          index,
          name,
          url,
        }}
      />
    </div>
  );
};
