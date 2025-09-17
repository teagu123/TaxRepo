export interface PriceListType {
  name: string;
  credit?: string;
  bonus?: string;
  won: string;
}

export const PRICE_LIST: PriceListType[] = [
  {
    name: "Light",
    credit: "2,200",
    bonus: "10%",
    won: "300",
  },
  {
    name: "Standard",
    credit: "6,000",
    bonus: "20%",
    won: "750",
  },
  {
    name: "Pro​",
    credit: "10,000",
    bonus: "30%",
    won: "1,500",
  },
  {
    name: "Max",
    credit: "28,000",
    bonus: "40%",
    won: "3,000",
  },
  {
    name: "Custom",
    won: "맞춤형 플랜",
  },
];
