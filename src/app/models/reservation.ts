/**
 * @Author: Jean Mira
 * @Date:   2024-09-15 13:41:27
 * @Last Modified by:   Jean Mira
 * @Last Modified time: 2024-09-15 13:46:30
 */

import { Client } from '../interfaces/client.interface';
import { Room } from '../interfaces/room.interface';

export class Reservation {
  constructor(
    public client: Client,
    public room: Room,
    public quantityDays: number
  ) {}

  public totalValue(): number {
    return this.room.value * this.quantityDays;
  }

  get bookingDetails(): string {
    return `Client: ${this.client.name}, Type: ${this.client.type}, Room: ${
      this.room.type
    }, Total value: ${this.totalValue()}`;
  }
}
