/**
 * @Author: Jean Mira
 * @Date:   2024-09-15 13:35:52
 * @Last Modified by:   Jean Mira
 * @Last Modified time: 2024-09-15 14:20:21
 */

import { RoomAbstract } from './room';

export class DeluxeRoom extends RoomAbstract {
  constructor() {
    super('Deluxe', 250);
  }
}
