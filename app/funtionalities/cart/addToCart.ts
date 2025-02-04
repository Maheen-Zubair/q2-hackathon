 import { Product } from '@/app/types/product';
    const addToCart = (product: Product) => {
         const storedCart = localStorage.getItem('cart');
         const cart = storedCart ? JSON.parse(storedCart) : [];
       
         const existingProductIndex = cart.findIndex((item: Product) => item._id === product._id);
         if (existingProductIndex !== -1) {
           cart[existingProductIndex].quantity += 1;
         } else {
           const productWithQuantity = { ...product, quantity: 1 };
           cart.push(productWithQuantity);
         }
         localStorage.setItem('cart', JSON.stringify(cart));
       };
       export default addToCart;