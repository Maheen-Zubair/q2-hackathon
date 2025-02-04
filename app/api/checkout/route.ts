import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2025-01-27.acacia",
});

export async function POST(req: Request) {
  try {
    const { products } = await req.json();

    if (!products || !Array.isArray(products)) {
      throw new Error("Invalid products data received");
    }

    console.log("Received products in API:", products); 

    const lineItems = products.map((product: any) => ({
      quantity: product.quantity || 1,
      price_data: {
        currency: "usd",
        product_data: {
          name: product.title || "No title",
          description: product.description || "No description",
        },
        unit_amount: product.price * 100, 
      },
    }));

    console.log("Line Items for Stripe:", lineItems); 

    // Create Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      success_url: "http://localhost:3001/orderCompleted",
      cancel_url: "http://localhost:3001/orderCancel",
      line_items: lineItems,
    });

    console.log("Stripe Session Created:", session); 

    return NextResponse.json({ sessionId: session.id });
  } catch (err: any) {
    console.error(" Error in API:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}