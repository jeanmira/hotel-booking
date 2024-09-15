/**
 * @Author: Jean Mira
 * @Date:   2024-09-15 11:52:56
 * @Last Modified by:   Jean Mira
 * @Last Modified time: 2024-09-15 11:55:37
 */

import { ClientAbstract } from './client';

export class normalClient extends ClientAbstract {
  constructor(name: string, type: string) {
    super(name, type);
  }
}
