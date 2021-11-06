import { ActionButtonTypes } from '../EquipmentDetail/types';
import { useInventoryContext } from '../hocks/Inventory';
import { Item } from '../Item';
import { Thumbnail } from '../Item/Thumbnail';

export const Inventory = () => {
  const { equipments } = useInventoryContext();

  return (
    <div
      className="d-flex flex-wrap w-100 border border-dark"
      style={{ marginTop: '30px' }}
    >
      {Array(10)
        .fill('')
        .map((curr, index) => {
          const equipment = equipments[index];

          return (
            <Item
              key={`inventory_item_${index}`}
              width={200}
              style={{ flex: '1 0 calc(20% - 20px)' }}
            >
              {equipment && (
                <Thumbnail
                  equipment={equipment}
                  actionButtons={ActionButtonTypes.INVENTORY}
                />
              )}
            </Item>
          );
        })}
    </div>
  );
};
