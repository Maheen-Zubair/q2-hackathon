# Marketplace Technical Foundation - Heckto (General e-commerce)

This README outlines the technical planning and system architecture for our marketplace. It includes details about schemas, API endpoints, and workflows.

---

## **Technical Requirements**

### **Frontend Requirements**
- **User-Friendly Interface**: Browsing products should be intuitive and seamless.
- **Responsive Design**: Ensure compatibility with both mobile and desktop users.

#### **Essential Pages**
1. **Home**  
   Displays featured products and categories.
2. **Product Listing**  
   Showcases all available products with filtering and sorting options.
3. **Product Details**  
   Detailed view of a single product, including specifications, reviews, and related products.
4. **Cart**  
   Displays selected items, quantities, and pricing summary.
5. **Checkout**  
   Allows users to provide shipping details and payment information.
6. **Order Confirmation**  
   Displays order details and confirmation status.

---

### **Backend Requirements**
#### **Sanity CMS**
- Used to manage:
  - Product details
  - Customer information
  - Order records
- Acts as the primary database for the marketplace.

#### **Third-Party APIs**
- **Integration Needs**:
  - Shipment Tracking
  - Payment Gateways

---

## **System Architecture**

Below is a visual representation of the general e-commerce system architecture:

![System Architecture](https://github.com/user-attachments/assets/7d2b6e54-cbcd-49c7-969c-b051c1effdf6)

---

## **API Specification**

The API specifications, including the Sanity schema and API endpoints, are outlined below:

![API Specifications](https://github.com/user-attachments/assets/c8347e97-952c-44eb-84dd-5c9807b44b6c)

---

## **Workflows**

### **Key User Workflows**
1. **Browsing Products**:
   - **User** accesses the homepage and browses through the product listing.
   - Product data is dynamically fetched from **Sanity CMS** and displayed on the frontend (including product name, description, price, and images).
   
2. **Adding Items to Cart**:
   - **User** selects a product and adds it to the cart.
   - Cart details (products, quantities, and prices) are stored in **Sanity CMS**.

3. **Checkout Process**:
   - **User** enters shipping and payment details (e.g., shipping address, payment method).
   - Payment is processed through a **third-party payment gateway** (e.g., Stripe or PayPal).
   - Once payment is successful, order details are stored in **Sanity CMS** and an order confirmation is sent to the user.

4. **Shipment Tracking**:
   - After the order is shipped, **third-party shipment APIs** are used to track the shipment status and provide the tracking number.
   - **User** receives shipment tracking details via email or website dashboard.

5. **Order Confirmation**:
   - **Backend system** confirms the order and sends an order confirmation email to the user, including the tracking number (if applicable).
   - Order records are updated in **Sanity CMS** to reflect the confirmed status.

6. **Order Delivery**:
   - **Shipment partner** delivers the product to the user.
   - The **user** is notified of successful delivery, and the order status in **Sanity CMS** is updated to "Delivered".


---

## **Sanity Schema Example**
Below is an example of a Sanity schema for managing product details:

```typescript
export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
  ],
};

