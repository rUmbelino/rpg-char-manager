import { Table } from 'react-bootstrap';
import { AdventuringGear } from '../../../@types/D&D';
import { EquipmentLine } from '../EquipmentLine';
import { ActionButtonTypes } from '../types';
import { ActionButtons } from '../ActionButtons';

interface AdventuringGearProps {
  gear: AdventuringGear;
  actionButtons: ActionButtonTypes;
  handleClose: () => void;
}

export const AdventuringGearDetail: React.FC<AdventuringGearProps> = ({
  gear,
  actionButtons,
  handleClose,
}) => {
  const { name, index, cost, gear_category, equipment_category, url, weight } =
    gear;

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
            name="Gear Category"
            description={gear_category?.name}
          />
          <EquipmentLine
            name="Cost"
            description={`${cost?.quantity} ${cost?.unit}`}
          />
          <EquipmentLine name="Weight" description={weight} />
          <EquipmentLine
            name="Category"
            description={equipment_category?.name}
          />
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
