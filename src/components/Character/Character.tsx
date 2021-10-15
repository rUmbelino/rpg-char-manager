import { ActionButtonTypes } from '../EquipmentDetail/types';
import { useCharacterContext } from '../hocks/Character';
import { Item } from '../Item';
import { Thumbnail } from '../Item/Thumbnail';

export const Character = (): JSX.Element => {
  const { head, chest, arms, legs } = useCharacterContext();
  const { EQUIPED_ITEMS_ON_CHARACTER } = ActionButtonTypes;

  return (
    <div>
      <Item style={{ marginLeft: '50px' }} width="75px" height="75px">
        <Thumbnail
          equipment={head}
          actionButtons={EQUIPED_ITEMS_ON_CHARACTER}
        />
      </Item>

      <div className="d-flex">
        <Item width="150px" height="300px">
          <Thumbnail
            equipment={chest}
            actionButtons={EQUIPED_ITEMS_ON_CHARACTER}
          />
        </Item>

        <div className="d-flex flex-column">
          <Item width="100px" height="142px">
            <Thumbnail
              equipment={arms}
              actionButtons={EQUIPED_ITEMS_ON_CHARACTER}
            />
          </Item>
          <Item width="100px" height="142px">
            <Thumbnail
              equipment={legs}
              actionButtons={EQUIPED_ITEMS_ON_CHARACTER}
            />
          </Item>
        </div>
      </div>
    </div>
  );
};
