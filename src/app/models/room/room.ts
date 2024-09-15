/**
 * @Author: Jean Mira
 * @Date:   2024-09-15 13:33:00
 * @Last Modified by:   Jean Mira
 * @Last Modified time: 2024-09-15 14:19:45
 */

import { Room } from '../../interfaces/room.interface';

export abstract class RoomAbstract implements Room {
  constructor(public type: string, public value: number) {}
}
