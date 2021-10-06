interface EquipmentDetailProps {
  equipment: any;
}

export const EquipmentDetail: React.FC<EquipmentDetailProps> = ({
  equipment,
}) => {
  return (
    <div className="overflow-scroll">
      <h2 className="mb-2">Equipment Details</h2>
      <h4>{JSON.stringify(equipment)}</h4>
    </div>
  );
};
