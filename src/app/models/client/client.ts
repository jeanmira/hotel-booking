/**
 * @Author: Jean Mira
 * @Date:   2024-09-15 11:31:57
 * @Last Modified by:   Jean Mira
 * @Last Modified time: 2024-09-15 11:51:41
 */

import { Client } from '../../interfaces/client.interface';

export abstract class ClientAbstract implements Client {
  constructor(public name: string, public type: string) {}

  getMessage(): string {
    return `Hello ${this.name}! I am a ${this.type}.`;
  }
}
