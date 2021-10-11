interface EquipmentLineProps {
  name: string;
  description: string | number;
}

export const EquipmentLine: React.FC<EquipmentLineProps> = ({
  name,
  description,
}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{description}</td>
    </tr>
  );
};
