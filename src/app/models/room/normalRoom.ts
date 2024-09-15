/**
 * @Author: Jean Mira
 * @Date:   2024-09-15 13:35:52
 * @Last Modified by:   Jean Mira
 * @Last Modified time: 2024-09-15 14:20:16
 */

import { RoomAbstract } from './room';

export class NormalRoom extends RoomAbstract {
  constructor() {
    super('Normal', 100);
  }
}
