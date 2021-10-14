interface EquipmentLineProps {
  name: string;
  description: string | number | boolean;
}

export const EquipmentLine: React.FC<EquipmentLineProps> = ({
  name,
  description,
}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{description?.toString()}</td>
    </tr>
  );
};
