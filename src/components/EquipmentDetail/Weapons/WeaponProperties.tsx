import { useEffect, useRef, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import { Equipment, EquipmentProperty } from '../../../@types/D&D';
import { fetchData } from '../controller';

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
    <Accordion className="mb-3">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Properties</Accordion.Header>
        <Accordion.Body>
          {equipments.map(({ name, index }, i) => {
            return (
              <div key={`prop_${index}`}>
                <strong>{name}:</strong>
                <p>{descriptions[i]?.toString()}</p>
              </div>
            );
          })}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};
