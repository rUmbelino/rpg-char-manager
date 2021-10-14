export enum EquipmentCategoryIndex {
  WEAPON = 'weapon',
  ARMOR = 'armor',
  ADVENTURING_GEAR = 'adventuring-gear',
}

export interface Equipment {
  index: string;
  name: string;
  url: string;
}

export interface Range {
  long?: number;
  normal?: number;
}

export interface Damage {
  damage_dice: string;
  damage_type: Equipment;
}

export interface EquipmentProperty extends Equipment {
  desc: string[];
}

export interface Weapon {
  index: string;
  name: string;
  equipment_category: Equipment;
  weapon_category: string;
  weapon_range: string;
  category_range: string;
  cost: {
    quantity: number;
    unit: string;
  };
  damage: Damage;
  two_handed_damage?: Damage;
  range: Range;
  throw_range?: Range;
  weight: number;
  properties: Equipment[];
  url: string;
  desc?: string[];
}

export interface Armor {
  armor_category: string;
  armor_class: {
    base: number;
    dex_bonus: boolean;
    max_bonus?: number;
  };
  cost: {
    quantity: number;
    unit: string;
  };
  equipment_category: Equipment;
  index: string;
  name: string;
  stealth_disadvantage: boolean;
  str_minimum: number;
  url: string;
  weight: number;
  desc?: string[];
}

export interface AdventuringGear {
  index: string;
  name: string;
  equipment_category: Equipment;
  gear_category: Equipment;
  cost: {
    quantity: number;
    unit: string;
  };
  weight: number;
  url: string;
}
