/**
 * @Author: Jean Mira
 * @Date:   2024-09-15 11:52:56
 * @Last Modified by:   Jean Mira
 * @Last Modified time: 2024-09-15 14:20:35
 */

import { ClientAbstract } from './client';

export class specialClient extends ClientAbstract {
  constructor(name: string, type: string) {
    super(name, type);
  }

  override getMessage(): string {
    return 'Thank you for being our VIP client!';
  }
}
