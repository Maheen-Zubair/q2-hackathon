import { client } from "@/sanity/lib/client"; // Sanity client ko import karein
import { Any } from "@sanity/client/csm";

export default async function handler(req:any, res:Any) {
  if (req.method === "POST") {
    const { productId, change } = req.body; // Body se productId aur change value lein

    try {
      await client
        .patch(productId) // Sanity ke product ka ID
        .inc({ stockLevel: change }) // Stock ko increment (+1) ya decrement (-1) karein
        .commit();

      res.status(200).json({ message: "Stock updated successfully!" });
    } catch (error) {
      console.error("Error updating stock:", error);
      res.status(500).json({ message: "Error updating stock" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
