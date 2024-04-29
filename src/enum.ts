/*
Enum Number / Bad Enum
export enum CustomerType {
  REGULAR,
  GOLD, 
  PLATINUM
}
*/

export enum CustomerType {
  REGULAR = "REGULAR",
  GOLD = "GOLD",
  PLATINUM = "PLATINUM"
}

export type Customer = {
  id: number;
  name: string;
  type: CustomerType;
}