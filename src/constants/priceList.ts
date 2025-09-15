export interface PriceListType {
  name: string;
  credit?: string;
  bonus?: string;
  won: string;
  checkList: string[];
}

export const PRICE_LIST: PriceListType[] = [
  {
    name: "Light",
    credit: "2,200",
    bonus: "10%",
    won: "300",
    checkList: ["사용자 수 무제한", "동일 AI 모델", "약 1,100~1,650개 질문"],
  },
  {
    name: "Standard",
    credit: "6,000",
    bonus: "20%",
    won: "750",
    checkList: ["사용자 수 무제한", "동일 AI 모델", "약 3,000~4,500개 질문"],
  },
  {
    name: "Pro​",
    credit: "10,000",
    bonus: "30%",
    won: "1,500",
    checkList: ["사용자 수 무제한", "동일 AI 모델", "약 5,000~7,500개 질문"],
  },
  {
    name: "Max",
    credit: "28,000",
    bonus: "40%",
    won: "3,000",
    checkList: ["사용자 수 무제한", "동일 AI 모델", "약 14,000~21,000개 질문"],
  },
  {
    name: "Custom",
    won: "맞춤형",
    checkList: ["사용자 수 무제한", "동일 AI 모델", "맞춤형 가격 플랜"],
  },
];
