export interface PriceListType {
  name: string;
  credit: string;
  bonus: string;
  won: string;
}

export const PRICE_LIST: PriceListType[] = [
  {
    name: "LIGHT",
    credit: "2,200",
    bonus: "10%",
    won: "3,000,000",
  },
  {
    name: "BASIC",
    credit: "6,000",
    bonus: "20%",
    won: "7,500,000",
  },
  {
    name: "PRO​",
    credit: "10,000",
    bonus: "30%",
    won: "15,000,000",
  },
  {
    name: "MAX​",
    credit: "28,000",
    bonus: "40%",
    won: "30,000,000",
  },
];
