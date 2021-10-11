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
}
