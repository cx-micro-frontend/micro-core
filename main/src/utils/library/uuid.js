import { v4 as uuidv4 } from 'uuid';

export const uuid = () => {
  return uuidv4();
};

// export const uuid = length => {
//   return Number(
//     Math.random()
//       .toString()
//       .substr(3, length) + Date.now()
//   ).toString(36);
// };
