/**
 * @Author: Jean Mira
 * @Date:   2024-09-15 11:14:19
 * @Last Modified by:   Jean Mira
 * @Last Modified time: 2024-09-15 20:07:22
 */

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { normalClient } from './models/client/normalClient';
import { NormalRoom } from './models/room/normalRoom';
import { Reservation } from './models/reservation';
import { Room } from './interfaces/room.interface';
import { HotelService } from './services/hotel.service';
import { specialClient } from './models/client/specialClient';
import { DeluxeRoom } from './models/room/deluxeRoom';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule], // Add FormsModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Fix typo here (styleUrls)
})
export class AppComponent {
  title = 'hotel-booking';
  client = { name: '' }; // Ensure client object has a 'name' property
  clientType = 'normal'; // Initialize clientType
  room!: Room; // Property to hold the room object
  roomType = 'Standard'; // Initialize roomType
  quantityDays!: number; // Property to hold quantityDays

  constructor(public hotelService: HotelService) {}

  createClient(): void {
    if (this.clientType == 'normal') {
      this.client = new normalClient(this.client.name, 'normal');
      this.roomType = 'simple';
    } else if (this.clientType == 'premium') {
      this.client = new specialClient(this.client.name, 'premium');
      this.roomType = 'premium';
    }

    this.hotelService.setClient(this.client);
    this.chooseRoom();
  }

  chooseRoom(): void {
    if (this.roomType == 'simple') {
      this.room = new NormalRoom();
    } else if (this.roomType == 'premium') {
      this.room = new DeluxeRoom();
    }

    this.hotelService.setRoom(this.room);
  }

  makeBooking(): void {
    this.createClient();

    let client = this.hotelService.getClient();
    let room = this.hotelService.getRoom();
    let booking = new Reservation(client, room, this.quantityDays);

    this.hotelService.addBooking(booking);
    console.log(this.hotelService.getBookings());
  }
}
