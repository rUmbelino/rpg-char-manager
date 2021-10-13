import { ActionButtonTypes } from '../EquipmentDetail/types';
import { useItemsContext } from '../hocks/Items';
import { Item } from '../Item';
import { Thumbnail } from '../Item/Thumbnail';

export const Items = (): JSX.Element => {
  const { weapons } = useItemsContext();

  return (
    <div className="d-flex align-items-center flex-column align-self-center h-100">
      <div className="d-flex align-items-center">
        <Item width="120px" height="70px">
          <Thumbnail
            equipment={weapons[0]}
            actionButtons={ActionButtonTypes.EQUIPED_ITEMS}
          />
        </Item>
        <Item width="120px" height="70px">
          <Thumbnail
            equipment={weapons[1]}
            actionButtons={ActionButtonTypes.EQUIPED_ITEMS}
          />
        </Item>
      </div>
      <div className="d-flex flex-wrap align-items-center">
        <Item width="70px" height="70px" />
        <Item width="70px" height="70px" />
        <Item width="70px" height="70px" />
        <Item width="70px" height="70px" />
      </div>
    </div>
  );
};
