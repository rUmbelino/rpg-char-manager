import { createContext, useContext, useState } from 'react';
import { Equipment } from '../../@types/D&D';
import { NIE } from '../../utils/NIE';

interface CharacterContextType {
  head?: Equipment;
  setHeadEquipment: (equipment?: Equipment) => void;
  chest?: Equipment;
  setChestEquipment: (equipment?: Equipment) => void;
  arms?: Equipment;
  setArmsEquipment: (equipment?: Equipment) => void;
  legs?: Equipment;
  setLegsEquipment: (equipment?: Equipment) => void;
}

const CharacterContext = createContext<CharacterContextType>({
  setArmsEquipment: NIE,
  setChestEquipment: NIE,
  setHeadEquipment: NIE,
  setLegsEquipment: NIE,
});

export const CharacterProvider: React.FC = ({ children }) => {
  const [head, setHeadEquipment] = useState<Equipment>();
  const [arms, setArmsEquipment] = useState<Equipment>();
  const [legs, setLegsEquipment] = useState<Equipment>();
  const [chest, setChestEquipment] = useState<Equipment>();

  return (
    <CharacterContext.Provider
      value={{
        head,
        setHeadEquipment,
        arms,
        setArmsEquipment,
        legs,
        setLegsEquipment,
        chest,
        setChestEquipment,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacterContext = () => useContext(CharacterContext);
