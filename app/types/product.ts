export type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageURL: string;
  quantity: number;
  discountPercentage?: number; 
  category?: string;          
};
