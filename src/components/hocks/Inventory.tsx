import { createContext, useContext, useState } from 'react';
import { Equipment } from '../../@types/D&D';
import { NIE } from '../../utils/NIE';

interface InventoryContextType {
  equipments: Equipment[];
  addEquipmentToInventory: (eq: Equipment) => void;
  removeEquipmentFromInventory: (id: string) => void;
}

const InventoryContext = createContext<InventoryContextType>({
  equipments: [],
  addEquipmentToInventory: NIE,
  removeEquipmentFromInventory: NIE,
});

export const InventoryProvider: React.FC = ({ children }) => {
  const [equipments, setEquipments] = useState<Equipment[]>([]);

  const addEquipmentToInventory = (equipment: Equipment) => {
    setEquipments([...equipments, equipment]);
  };

  const removeEquipmentFromInventory = (index: string) => {
    const equipmentsList = [...equipments];
    const indexOfItemToRemove = equipmentsList.findIndex(
      (item) => item.index === index
    );
    equipmentsList.splice(indexOfItemToRemove, 1);

    setEquipments(equipmentsList);
  };

  return (
    <InventoryContext.Provider
      value={{
        equipments,
        addEquipmentToInventory,
        removeEquipmentFromInventory,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
};

export const useInventoryContext = () => useContext(InventoryContext);
