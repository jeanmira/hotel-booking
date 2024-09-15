/**
 * @Author: Jean Mira
 * @Date:   2024-09-15 11:14:19
 * @Last Modified by:   Jean Mira
 * @Last Modified time: 2024-09-15 14:08:01
 */

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { normalClient } from './models/client/normalClient';
import { NormalRoom } from './models/client/normalRoom';
import { Reservation } from './models/reservation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'hotel-booking';

  ngOnInit() {
    let client = new normalClient('Jean', 'Normal');
    let room = new NormalRoom();

    let booking = new Reservation(client, room, 1);

    booking.bookingDetails;
  }
}
