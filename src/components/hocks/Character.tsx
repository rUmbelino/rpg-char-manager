import { createContext, useContext, useState } from 'react';
import { Equipment } from '../../@types/D&D';
import { NIE } from '../../utils/NIE';

interface CharacterContextType {
  head?: Equipment;
  setHeadEquipment: (equipment?: Equipment) => void;
  chest?: Equipment;
  setChestEquipment: (equipment?: Equipment) => void;
  holding: Equipment[];
  addHoldingEquipment: (equipment: Equipment) => void;
  removeHoldingEquipment: (equipment: Equipment) => void;
}

const CharacterContext = createContext<CharacterContextType>({
  holding: [],
  setChestEquipment: NIE,
  setHeadEquipment: NIE,
  addHoldingEquipment: NIE,
  removeHoldingEquipment: NIE,
});

export const CharacterProvider: React.FC = ({ children }) => {
  const [head, setHeadEquipment] = useState<Equipment>();
  const [chest, setChestEquipment] = useState<Equipment>();
  const [holding, setHoldingEquipment] = useState<Equipment[]>([]);

  const addHoldingEquipment = (equipment: Equipment) => {
    setHoldingEquipment([...holding, equipment]);
  };

  const removeHoldingEquipment = (equipment: Equipment) => {
    const holdingList = [...holding];
    const indexOfItemToRemove = holdingList.findIndex(
      ({ index }) => index === equipment.index
    );

    holdingList.splice(indexOfItemToRemove, 1);
    setHoldingEquipment(holdingList);
  };

  return (
    <CharacterContext.Provider
      value={{
        head,
        setHeadEquipment,
        chest,
        setChestEquipment,
        holding,
        addHoldingEquipment,
        removeHoldingEquipment,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacterContext = () => useContext(CharacterContext);
