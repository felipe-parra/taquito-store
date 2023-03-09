export type TaquitoType = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  quantity?: number;
  promotion?: boolean;
  promotionDiscount?: number;
};
