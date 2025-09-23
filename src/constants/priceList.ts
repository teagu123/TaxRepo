export interface PriceListType {
  name: string;
  credit?: string;
  totalCredit?: string;
  bonus?: string;
  won: string;
  maxUsers?: string;
}

export const PRICE_LIST: PriceListType[] = [
  {
    name: "Light",
    credit: "2,000",
    totalCredit: "2,200",
    bonus: "10%",
    won: "300",
    maxUsers: "5",
  },
  {
    name: "Standard",
    credit: "5,000",
    totalCredit: "6,000",
    bonus: "20%",
    won: "750",
    maxUsers: "15",
  },
  {
    name: "Pro​",
    credit: "10,000",
    totalCredit: "13,000",
    bonus: "30%",
    won: "1,500",
    maxUsers: "50",
  },
  {
    name: "Max",
    credit: "20,000",
    totalCredit: "28,000",
    bonus: "40%",
    won: "3,000",
    maxUsers: "150",
  },
  {
    name: "Custom",
    won: "맞춤형 플랜",
    credit: "28,000",
  },
];
