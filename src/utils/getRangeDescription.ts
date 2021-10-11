import { Range } from '../@types/D&D';

export const getRangeDescription = (range: Range): string => {
  let description = '';

  description = `Normal ${range.normal ? range.normal : 0}`;
  description += `, Long ${range.long ? range.long : 0}`;

  return description;
};
