import { Item } from '../@types/Item';

const STORAGE_KEY = 'items';

export const getItemsFromStorage = (): Item[] => {
  const items = localStorage.getItem(STORAGE_KEY);

  if (!items) {
    return [];
  }

  return JSON.parse(items);
};

export const setItemsInStorage = (items: Item[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
};
