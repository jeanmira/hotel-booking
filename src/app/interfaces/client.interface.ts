/**
 * @Author: Jean Mira
 * @Date:   2024-09-15 11:49:30
 * @Last Modified by:   Jean Mira
 * @Last Modified time: 2024-09-15 11:51:20
 */

export interface Client {
  name: string;
  type: string;

  getMessage(): string;
}
