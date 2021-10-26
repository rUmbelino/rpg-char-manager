import { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import { Equipment } from '../../@types/D&D';
import { useEquipmentsContext } from '../hocks/Equipments';
import { fetchEquipments } from './controller';
import { EquipmentItems } from './EquipmentItems';
import { Filter } from './Filter';

export const ItemsList = (): JSX.Element => {
  const style = {
    border: '1px solid black',
    margin: '0.5rem 0',
    width: '250px',
    maxHeight: '500px',
    overflow: 'scroll',
  };

  const {
    weapons,
    setWeapons,
    armor,
    setArmor,
    adventuringGear,
    setAdventuringGear,
  } = useEquipmentsContext();

  const accordionItems = [
    {
      title: 'Weapons',
      items: weapons,
      fetchItems: () =>
        fetchEquipments(setWeapons, '/api/equipment-categories/weapon'),
    },
    {
      title: 'Armor',
      items: armor,
      fetchItems: () =>
        fetchEquipments(setArmor, '/api/equipment-categories/armor'),
    },
    {
      title: 'Adventuring Gear',
      items: adventuringGear,
      fetchItems: () =>
        fetchEquipments(
          setAdventuringGear,
          '/api/equipment-categories/standard-gear'
        ),
    },
  ];

  const [filter, setFilter] = useState<string>('');
  const [activeKey, setActiveKey] = useState<string>('');
  const [filteredEquipment, setFilteredEquipment] = useState<Equipment[]>();

  useEffect(() => {
    const filterByName = (equipment: Equipment) => {
      return equipment.name
        .toLocaleLowerCase()
        .includes(filter.toLocaleLowerCase());
    };

    if (filter === '') {
      setFilteredEquipment(undefined);
      setActiveKey('');
      return;
    }

    [weapons, armor, adventuringGear].every((equipments, index) => {
      const equipment = equipments.filter(filterByName);
      if (equipment.length) {
        setActiveKey(index.toString());
        setFilteredEquipment(equipment);
        return false;
      }

      return true;
    });
  }, [filter, adventuringGear, armor, weapons]);

  return (
    <div style={style}>
      <Filter value={filter} onChange={setFilter} />
      <Accordion flush activeKey={activeKey || undefined}>
        {accordionItems.map(({ title, items, fetchItems }, index) => {
          return (
            <Accordion.Item
              key={`${title}_${index}`}
              eventKey={index.toString()}
            >
              <Accordion.Header>{title}</Accordion.Header>
              <Accordion.Body className="p-0">
                <EquipmentItems
                  items={filteredEquipment ? filteredEquipment : items}
                  fetchItems={fetchItems}
                  clearFilter={() => setFilter('')}
                />
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
};
