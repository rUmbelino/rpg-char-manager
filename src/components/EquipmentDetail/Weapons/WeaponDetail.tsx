import { Table } from 'react-bootstrap';
import { Weapon } from '../../../@types/D&D';
import { getRangeDescription } from '../../../utils/getRangeDescription';
import { WeaponsActionButtons } from './WeaponsActionButtons';
import { EquipmentLine } from '../EquipmentLine';
import { WeaponProperties } from './WeaponProperties';
import { ActionButtonTypes } from '../types';

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
    desc,
  } = weapon;

  const renderDescription = () => {
    return (
      <EquipmentLine name="Details" description={desc?.join('. ') || ''} />
    );
  };

  const renderFullWeaponItems = () => {
    return (
      <>
        <EquipmentLine name="Range" description={category_range} />
        <EquipmentLine
          name="Cost"
          description={`${cost?.quantity} ${cost?.unit}`}
        />
        <EquipmentLine name="Weight" description={weight} />
        {damage && (
          <EquipmentLine
            name="Damage"
            description={`${damage?.damage_dice} (${damage?.damage_type.name})`}
          />
        )}
        {two_handed_damage && (
          <EquipmentLine
            name="Two Handed Damage"
            description={`${two_handed_damage?.damage_dice} (${two_handed_damage?.damage_type.name})`}
          />
        )}

        {range && (
          <EquipmentLine
            name="Range"
            description={getRangeDescription(range)}
          />
        )}
        {throw_range && (
          <EquipmentLine
            name="Thrown Range"
            description={getRangeDescription(throw_range)}
          />
        )}
        {properties && <WeaponProperties equipments={properties} />}
      </>
    );
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
          <EquipmentLine name="Name" description={name} />
          <EquipmentLine
            name="Category"
            description={equipment_category?.name}
          />
          {desc ? renderDescription() : renderFullWeaponItems()}
        </tbody>
      </Table>
      <WeaponsActionButtons
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
