import { ActionButtonTypes } from '../EquipmentDetail/types';
import { useItemsContext } from '../hocks/Items';
import { Item } from '../Item';
import { Thumbnail } from '../Item/Thumbnail';

export const Items = (): JSX.Element => {
  const { weapons, items } = useItemsContext();

  return (
    <div className="d-flex align-items-center flex-column align-self-center h-100">
      <div className="d-flex align-items-center" style={{ marginTop: '95px' }}>
        <Item width={200}>
          <Thumbnail
            equipment={weapons[0]}
            actionButtons={ActionButtonTypes.EQUIPED_ITEMS_ON_HANDS}
          />
        </Item>
        <Item width={200}>
          <Thumbnail
            equipment={weapons[1]}
            actionButtons={ActionButtonTypes.EQUIPED_ITEMS_ON_HANDS}
          />
        </Item>
      </div>
      <div className="d-flex align-items-center">
        {Array(4)
          .fill('')
          .map((str, index) => {
            return (
              <Item width={92} key={index}>
                <Thumbnail
                  equipment={items[index]}
                  actionButtons={ActionButtonTypes.EQUIPED_ITEMS_ON_POCKETS}
                />
              </Item>
            );
          })}
      </div>
    </div>
  );
};
