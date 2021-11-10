import { Table } from 'react-bootstrap';
import { Weapon } from '../../../@types/D&D';
import { getRangeDescription } from '../../../utils/getRangeDescription';
import { ActionButtons } from '../ActionButtons';
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

  const renderDamage = () => {
    const oneHand = `${damage?.damage_dice} (${damage?.damage_type.name})`;
    let twoHand = '';
    if (two_handed_damage?.damage_dice) {
      twoHand = `/ ${two_handed_damage?.damage_dice} (${two_handed_damage?.damage_type.name})`;
    }

    return `${oneHand} ${twoHand}`;
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
        {damage && <EquipmentLine name="Damage" description={renderDamage()} />}

        {range && (
          <EquipmentLine
            name="Range"
            description={getRangeDescription(range)}
          />
        )}
        {throw_range && (
          <EquipmentLine
            name="Thrown"
            description={getRangeDescription(throw_range)}
          />
        )}
      </>
    );
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th style={{ width: '70px' }}>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{desc ? renderDescription() : renderFullWeaponItems()}</tbody>
      </Table>
      {properties && <WeaponProperties equipments={properties} />}
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
