import { useEffect, useRef, useState } from 'react';
import { Equipment, EquipmentProperty } from '../../../@types/D&D';
import { fetchData } from '../controller';
import { EquipmentLine } from '../EquipmentLine';

interface WeaponPropertiesProps {
  equipments: Equipment[];
}

export const WeaponProperties: React.FC<WeaponPropertiesProps> = ({
  equipments,
}) => {
  const [descriptions, setDescriptions] = useState<string[]>([]);

  const fetchPropertiesOnMount = useRef(() => {
    Promise.all(
      equipments.map(({ url }) => fetchData<EquipmentProperty>(url))
    ).then((values) => {
      const joinedDescriptions = values.map((value) => {
        if (value?.desc) {
          return value.desc.join();
        }

        return '';
      });
      setDescriptions(joinedDescriptions);
    });
  });

  useEffect(() => {
    fetchPropertiesOnMount.current();
  }, []);

  if (descriptions.length === 0) {
    return null;
  }

  return (
    <>
      {equipments.map(({ name, index }, i) => {
        return (
          <EquipmentLine
            key={index}
            name={name}
            description={descriptions[i]}
          />
        );
      })}
    </>
  );
};
