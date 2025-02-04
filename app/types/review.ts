export interface Review {
    _id: string;
    name: string;
    comment: string;
    rating: number;
  }
  
  export interface Product {
    _id: string;
    name: string;
    description: string;
    imageUrl: string;
    reviews: Review[];
  }
  