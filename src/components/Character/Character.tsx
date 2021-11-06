import { ActionButtonTypes } from '../EquipmentDetail/types';
import { useCharacterContext } from '../hocks/Character';
import { Item } from '../Item';
import { Thumbnail } from '../Item/Thumbnail';

export const Character = (): JSX.Element => {
  const { head, chest, holding } = useCharacterContext();
  const { EQUIPED_ITEMS_ON_CHARACTER } = ActionButtonTypes;

  return (
    <div className="position-relative">
      <Item width={130} style={{ marginLeft: '46px' }}>
        <Thumbnail
          equipment={head}
          actionButtons={EQUIPED_ITEMS_ON_CHARACTER}
        />
      </Item>

      <div className="d-flex mt-1">
        <Item width={200} height="360px">
          <Thumbnail
            equipment={chest}
            actionButtons={EQUIPED_ITEMS_ON_CHARACTER}
          />
        </Item>

        <div className="d-flex flex-column">
          {Array(4)
            .fill('')
            .map((a, index) => {
              return (
                <Item width={130} key={`character_pocket_${index}`}>
                  <Thumbnail
                    equipment={holding[index]}
                    actionButtons={EQUIPED_ITEMS_ON_CHARACTER}
                  />
                </Item>
              );
            })}
        </div>
      </div>
    </div>
  );
};
