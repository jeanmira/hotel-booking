/**
 * @Author: Jean Mira
 * @Date:   2024-09-15 16:12:47
 * @Last Modified by:   Jean Mira
 * @Last Modified time: 2024-09-15 16:19:18
 */

import { Injectable } from '@angular/core';
import { Client } from '../interfaces/client.interface';
import { Room } from '../interfaces/room.interface';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  private client!: Client;
  private room!: Room;
  private booking: Reservation[] = [];
  constructor() {}

  setClient(client: any) {
    this.client = client;
  }

  getClient(): Client {
    return this.client;
  }

  setRoom(room: Room) {
    this.room = room;
  }

  getRoom(): Room {
    return this.room;
  }

  addBooking(booking: Reservation) {
    this.booking.push(booking);
  }

  getBookings(): Reservation[] {
    return this.booking;
  }
}
