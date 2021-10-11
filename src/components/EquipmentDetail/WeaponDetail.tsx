import { Table } from 'react-bootstrap';
import { Weapon } from '../../@types/D&D';
import { getRangeDescription } from '../../utils/getRangeDescription';
import { ActionButtons, ActionButtonTypes } from './ActionButtons';
import { EquipmentLine } from './EquipmentLine';
import { WeaponProperties } from './WeaponProperties';

interface WeaponDetailProps {
  weapon: Weapon;
  actionButtons: ActionButtonTypes;
  handleClose: () => void;
}

export const WeaponDetail: React.FC<WeaponDetailProps> = ({
  weapon,
  actionButtons,
  handleClose,
}) => {
  const {
    index,
    name,
    weight,
    category_range,
    cost,
    damage,
    two_handed_damage,
    equipment_category,
    properties,
    range,
    throw_range,
    url,
  } = weapon;

  const equipment = {
    index,
    name,
    url,
  };

  return (
    <div>
      <h2 className="mb-2">{name}</h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <EquipmentLine name="Index" description={index} />
          <EquipmentLine name="Range" description={category_range} />
          <EquipmentLine
            name="Cost"
            description={`${cost.quantity} ${cost.unit}`}
          />
          <EquipmentLine name="Weight" description={weight} />
          <EquipmentLine
            name="Damage"
            description={`${damage?.damage_dice} (${damage.damage_type.name})`}
          />
          {two_handed_damage && (
            <EquipmentLine
              name="Two Handed Damage"
              description={`${two_handed_damage?.damage_dice} (${two_handed_damage.damage_type.name})`}
            />
          )}
          <EquipmentLine
            name="Category"
            description={equipment_category.name}
          />
          <EquipmentLine
            name="Range"
            description={getRangeDescription(range)}
          />
          {throw_range && (
            <EquipmentLine
              name="Thrown Range"
              description={getRangeDescription(throw_range)}
            />
          )}
          <WeaponProperties equipments={properties} />
        </tbody>
      </Table>
      <ActionButtons
        actionButtons={actionButtons}
        handleClose={handleClose}
        equipment={equipment}
      />
    </div>
  );
};
